import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { createStore, Store, applyMiddleware, combineReducers } from 'redux';
import { State, initialState } from './models/State';
import { reducer } from './models/Reducer';
import { Provider } from 'react-redux';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { PersistGate } from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

const history = createBrowserHistory();

const rootReducer = combineReducers({
  ...reducer,
  router: connectRouter(history)
})
const persistorConfig: PersistConfig<State> = {
  key: 'example',
  version: 1,
  blacklist: ['router'],
  storage
}
const persistentReducer = persistReducer(persistorConfig, rootReducer);

const store: Store<State> = createStore(
  persistentReducer,
  initialState,
  applyMiddleware(thunk, routerMiddleware(history))
)

const persistor = persistStore(store);

const createApp = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

ReactDOM.render(createApp(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
