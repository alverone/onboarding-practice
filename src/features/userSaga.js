import { call, put, takeEvery, select } from "redux-saga/effects";
import { postUserSuccess, toggleModal } from "./userSlice";

function* workPostUserFetch() {
  const user = yield select((state) => state.user.userData);

  yield call(() =>
    fetch("http://localhost:8001/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(user),
    })
  );

  yield put(postUserSuccess());
  yield put(toggleModal(false));
}

export function* userSaga() {
  yield takeEvery("user/postUserFetch", workPostUserFetch);
}
