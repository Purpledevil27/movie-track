import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/reducer';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

const logger = ({ dispatch, getstate }) => (next) => (action) => {
  if (typeof action !== 'function') {
    console.log('Action type', action.type)
  }
  next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);