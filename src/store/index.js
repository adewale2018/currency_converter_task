import { applyMiddleware, createStore } from "redux";

import { createLogger } from "redux-logger";
import rootReducer from "./reducers/index";
import thunkMiddleware from "redux-thunk";

const logger = createLogger();

const middlewares = [thunkMiddleware];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
