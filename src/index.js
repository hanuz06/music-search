import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./Reducer";

//STORE -> GLOBALIZED STATE
const musicData = createStore(reducer);

ReactDOM.render(
  <Provider store={musicData}>
    <App />
  </Provider>,
  document.getElementById("root")
);
