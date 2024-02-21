import { all } from "redux-saga/effects";
import { watchSongsAsync } from "./types/song";

// Root saga
export function* rootSaga() {
  yield all([watchSongsAsync()]);
}
