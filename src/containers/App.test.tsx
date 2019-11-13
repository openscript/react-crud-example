import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import { Provider } from 'react-redux';
import { State } from '../models/State';
import thunk from 'redux-thunk';
import { ThunkDispatchType } from '../features/FeatureHelpers';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

describe('My fancy application', () => {
  let store: MockStoreEnhanced;
  let component: ReactTestRenderer;

  const renderComponent = () => (
    <Provider store={store}>
      <App />
    </Provider>
  )

  beforeEach(() => {
    const mockStore = createMockStore<State, ThunkDispatchType>([thunk]);
    store = mockStore({
      users: [
        {id: 0, forename: 'Joe', surname: 'Doe', email: 'joe.doe@example.com'}
      ]
    });
    component = renderer.create(renderComponent())
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(renderComponent(), div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
})