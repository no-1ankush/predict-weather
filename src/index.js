//Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//Component imports
import App from './components/app';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <App />
  </Provider>
  , document.getElementById('root')
);

registerServiceWorker();
