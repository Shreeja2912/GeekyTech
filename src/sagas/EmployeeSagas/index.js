import { put, takeLatest, call, delay } from "redux-saga/effects";
import {
  dataFetchInitated,
  dataFetchFailure,
  dataFetchSuccess,
} from "../../actions/sagaActions";
import axios from "axios";

function* handleDataFetchSaga(action) {
  try {
    yield put(dataFetchInitated());

    const response = yield call(axios.get, `https://api.github.com/users`);
    //  console.log(response);
    yield delay(3000);
    yield put(dataFetchSuccess(response));
  } catch (error) {
    yield put(dataFetchFailure());
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchForHandleDataFetch() {
  yield takeLatest("HANDLER_CLICKED", handleDataFetchSaga);
}
