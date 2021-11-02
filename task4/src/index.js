import React from "react";
import ReactDOM from "react-dom";
// import styles from './styles.module.css';
import App from "./app/app";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
