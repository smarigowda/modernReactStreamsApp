import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import App from "./components/App";
import reducers from "./reducers";

const composeEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

const store = createStore(reducers, composeEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
