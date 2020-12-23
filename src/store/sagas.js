import { call, all, spawn } from 'redux-saga/effects';
import articlesSagas from '../features/Articles/store/sagas'

export default function* rootSaga() {
  const sagas = articlesSagas;
  yield all(
    sagas.map((saga) =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      }),
    ),
  );
}
