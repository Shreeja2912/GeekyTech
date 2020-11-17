import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
        applyMiddleware(...middleWares),
        window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    : applyMiddleware(...middleWares)
);
sagaMiddleware.run(rootSaga);
export default store;
