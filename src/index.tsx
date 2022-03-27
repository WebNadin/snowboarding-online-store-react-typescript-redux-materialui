import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import {rootReducer} from "./redux/rootReducer";
import { GlobalStyle } from './styles/global';
import './index.css';
import App from './App';
import {forbiddenWordsMiddleware} from "./redux/middleware";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    thunk,
    forbiddenWordsMiddleware
  ),
  // other store enhancers if any
))

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
