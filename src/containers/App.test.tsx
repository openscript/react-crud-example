import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import { State } from '../models/State';
import { ThunkDispatchType } from '../features/FeatureHelpers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

describe('My fancy application', () => {
  let store: MockStoreEnhanced;

  const renderComponent = () => (
    <Provider store={store}>
      <App />
    </Provider>
  )

  beforeEach(() => {
    const mockStore = createMockStore<State, ThunkDispatchType>([thunk]);
    store = mockStore({
      users: [
        {id: 0, forename: 'John', surname: 'Doe', email: 'john.doe@example.com'}
      ]
    });
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(renderComponent(), div);
    ReactDOM.unmountComponentAtNode(div);
  });
})
