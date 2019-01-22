import { put, takeEvery, all } from 'redux-saga/effects'

export function* LoaderSetSuccess() {
  yield put({ type: 'LOADER/SET_SUCCESS' })
}

export function* watchLoaderAsync() {
  yield takeEvery('LOADER_ASYNC', LoaderSetSuccess)
}

export default function* rootSaga() {
  yield all([
    watchLoaderAsync()
  ])
}
