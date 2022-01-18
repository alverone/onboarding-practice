import { call, put, takeEvery } from "redux-saga/effects";
import {
  updateUserSuccess,
  validateUserError,
  validateUserSuccess,
} from "./userSlice";

function* workValidateUserFetch(action) {
  const { user, postCase, modalHandler, errorHandler } = action.payload;

  const request = yield call(() =>
    fetch("http://localhost:8000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(user),
    })
  );

  if (request.status === 200) {
    yield modalHandler();
    if (postCase === "ADD") {
      yield put(validateUserSuccess());
    } else if (postCase === "UPDATE") {
      yield put(updateUserSuccess(user));
    }
  } else {
    const message = yield request.json();
    yield put(
      validateUserError({ errors: message.errors, handler: errorHandler })
    );
  }
}

export function* userSaga() {
  yield takeEvery("user/validateUserFetch", workValidateUserFetch);
}
