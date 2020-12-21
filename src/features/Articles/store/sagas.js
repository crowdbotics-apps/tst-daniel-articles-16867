import { call, put, takeEvery } from "redux-saga/effects";
import * as types from "./constants"
import service from "./services"

function* article_listWorker(action) {
  try {
    const result = yield call(service.article_list, action)
    yield put(actions.article_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.article_listFailed(err, action))
  }
}

function* article_listWatcher() {
  yield takeEvery(types.ARTICLE_LIST, article_listWorker)
}

function* article_readWorker(action) {
  try {
    const result = yield call(service.article_read, action)
    yield put(actions.article_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.article_readFailed(err, action))
  }
}

function* article_readWatcher() {
  yield takeEvery(types.ARTICLE_READ, article_readWorker)
}

export default [
  article_listWatcher,
  article_readWatcher
]