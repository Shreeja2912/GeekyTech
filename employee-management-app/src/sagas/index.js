import { all, fork } from "redux-saga/effects";

import * as employeeSagas from "./EmployeeSagas";
import * as DetailsSaga from "./DetailsSaga";

export default function* rootSaga() {
  yield all(
    [...Object.values(employeeSagas), ...Object.values(DetailsSaga)].map(fork)
  );
}
