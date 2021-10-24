import { RatesTypes } from "../actions/rates/types";

const initialState = {
  loading: false,
  loadingStatus: "",
  rates: [],
};

const rateReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case RatesTypes.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case RatesTypes.SET_RATES_STATUS:
      return {
        ...state,
        loadingStatus: payload,
      };
    case RatesTypes.SET_RATES:
      return {
        ...state,
        rates: payload,
      };
    default:
      return state;
  }
};

export default rateReducer;
