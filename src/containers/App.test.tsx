import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { State } from '../models/State';
import thunk from 'redux-thunk';
import { ThunkDispatchType } from '../features/FeatureHelpers';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const mockStore = createMockStore<State, ThunkDispatchType>([thunk]);
  const store = mockStore({
    users: [
      {id: 0, forename: 'Tester', surname: 'Doe', email: 'adama'}
    ]
  })
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
