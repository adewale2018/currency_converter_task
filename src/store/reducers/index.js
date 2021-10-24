import { combineReducers } from "redux";
import rateReducer from "./rates";

const rootReducer = combineReducers({
  rates: rateReducer,
});

export default rootReducer;
