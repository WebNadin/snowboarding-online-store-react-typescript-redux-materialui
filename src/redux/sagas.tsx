import {takeEvery, put, call} from "redux-saga/effects";
import {FETCH_COMMENTS, REQUEST_COMMENTS} from "./types";
import {hideLoader, showAlert, showLoader} from "./actions";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_COMMENTS, sagaWorker)
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload: {} = yield call(fetchComments);
    yield put({ type: FETCH_COMMENTS, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(showAlert("Что-то пошло не так"));
    yield put(hideLoader());
  }
}

async function fetchComments() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=5');
  return await response.json();
}