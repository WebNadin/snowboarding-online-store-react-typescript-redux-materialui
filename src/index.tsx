import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import {rootReducer} from "./redux/rootReducer";
import { GlobalStyle } from './styles/global';
import './index.css';
import App from './App';
import {forbiddenWordsMiddleware} from "./redux/middleware";
import {sagaWatcher} from "./redux/sagas";

const saga = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    thunk,
    forbiddenWordsMiddleware,
    saga
  ),
  // other store enhancers if any
))
export type AppDispatch = typeof store.dispatch
saga.run(sagaWatcher)

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
