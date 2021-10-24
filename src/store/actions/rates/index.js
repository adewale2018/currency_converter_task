import { RatesTypes } from "./types";
import axios from "axios";

export const setLoadingStatus = (payload) => ({
  type: RatesTypes.SET_LOADING,
  payload,
});

export const setRatesStatus = (payload) => ({
  type: RatesTypes.SET_RATES_STATUS,
  payload,
});

export const setRates = (payload) => ({
  type: RatesTypes.SET_RATES,
  payload,
});

export const fetchRates = () => {
  let KEY;
  if (process.env.NODE_ENV !== "production") {
    KEY = process.env.REACT_APP_API_KEY;
  } else {
    KEY = process.env.APP_KEY;
  }
  return async (dispatch) => {
    dispatch(setLoadingStatus(true));
    dispatch(setLoadingStatus("fetching"));
    try {
      const response = await axios.get(
        `http://data.fixer.io/api/latest?access_key=${KEY}`
      );
      if (response && response.status === 200) {
        dispatch(setLoadingStatus(false));
        dispatch(setRatesStatus("fetched"));
        dispatch(setRates(response.data.rates));
      }
    } catch (error) {
      setLoadingStatus(false);
      setRatesStatus("error");
    }
  };
};
