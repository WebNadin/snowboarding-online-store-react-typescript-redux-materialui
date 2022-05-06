import {takeEvery, put, call} from "redux-saga/effects";
import {hideLoader, showAlert, showLoader} from "./actions";
import {GET_PRODUCTS, SHOW_PRODUCTS} from "./types";
import data from "../data/data.json";

export function* sagaWatcher() {
  yield takeEvery(SHOW_PRODUCTS, sagaProductsWorker)
}

function* sagaProductsWorker() {
  try {
    yield put(showLoader());
    const payload: {} = yield call(fetchProducts);
    yield put({ type: GET_PRODUCTS, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(hideLoader());
    yield put(showAlert('Что-то пошло не так'));
  }
}

function fetchProducts() {
  return data.products;
}