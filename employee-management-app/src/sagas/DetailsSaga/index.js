import { put, takeLatest, call, delay } from "redux-saga/effects";
import {
  dailogFetchInitated,
  dailogFetchFailure,
  dailogFetchSuccess,
} from "../../actions/sagaActions";
import axios from "axios";

function* handleDetailsFetchSaga(action) {
  console.log("Hi from handleDetailsFetchSaga", action.payload);
  try {
    yield put(dailogFetchInitated(action.payload));
    const response = yield call(
      axios.get,
      `https://api.github.com/users/${action.payload}`
    );
    console.log(
      "hi from axios handleDetailsFetchSaga",
      response,
      action.payload
    );
    yield delay(2000);
    yield put(dailogFetchSuccess(response));
  } catch (error) {
    yield put(dailogFetchFailure());
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchForHandleDetailFetch() {
  yield takeLatest("HANDLER_CLICKED_DETAILS", handleDetailsFetchSaga);
}
