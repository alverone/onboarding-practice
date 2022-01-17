import { call, put, takeEvery } from "redux-saga/effects";
import { updateUserSuccess, postUserError, postUserSuccess } from "./userSlice";

function* workPostUserFetch(action) {
  const { user, modalHandler, errorHandler } = action.payload;
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
    yield put(postUserSuccess());
  } else {
    const message = yield request.json();
    yield put(postUserError({ errors: message.errors, handler: errorHandler }));
  }
}

function* workUpdateUserPost(action) {
  const { user, modalHandler, errorHandler } = action.payload;
  console.log(user);
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
  console.log(request);

  if (request.status === 200) {
    yield modalHandler();
    yield put(updateUserSuccess(user));
  } else {
    const message = yield request.json();
    yield put(postUserError({ errors: message.errors, handler: errorHandler }));
  }
}

export function* userSaga() {
  yield takeEvery("user/postUserFetch", workPostUserFetch);
  yield takeEvery("user/updateUserPost", workUpdateUserPost);
}
