import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ContextApi from "./ContextApi";
ReactDOM.render(
  <>
  <ContextApi>
  <App/>
  </ContextApi>
  </>,document.getElementById("root")
)