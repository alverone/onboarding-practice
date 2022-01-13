import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import { userSaga } from "./features/userSaga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: { user: userReducer },
  middleware: [saga],
});

saga.run(userSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
