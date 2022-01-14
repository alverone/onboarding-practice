import { call, put, takeEvery } from "redux-saga/effects";
import { postUserError, postUserSuccess } from "./userSlice";

function* workPostUserFetch(action) {
  const { user, modalHandler } = action.payload;
  const request = yield call(() =>
    fetch("http://localhost:8001/user", {
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
    yield put(postUserSuccess());
  } else {
    const message = yield request.json();
    yield put(postUserError(message.errors));
  }
}

export function* userSaga() {
  yield takeEvery("user/postUserFetch", workPostUserFetch);
}
