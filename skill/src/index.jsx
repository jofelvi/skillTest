import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RoutesCustomComponent from "./routes/routes";
import {Provider} from "react-redux";
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './store/index'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <RoutesCustomComponent>
              <App />
          </RoutesCustomComponent>
      </Provider>
  </React.StrictMode>
);
