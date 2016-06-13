require("./stylesheets/base.scss")

import React from "react"
import { render } from "react-dom"
import App from "./components/app"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { apiMiddleware } from 'redux-api-middleware';
import reducers from "./reducers"

let store = applyMiddleware(apiMiddleware)(createStore)(reducers)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("app")
)
