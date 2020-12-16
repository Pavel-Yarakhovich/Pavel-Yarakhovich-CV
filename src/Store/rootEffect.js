import { all } from "redux-saga/effects";
// import { watchService } from "./service/serviceEffect";

export function* rootSaga() {
  yield all([
    // watchService(),
  ]);
}
