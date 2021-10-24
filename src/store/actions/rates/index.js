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

const { REACT_APP_API_KEY } = process.env;

export const fetchRates = () => {
  return async (dispatch) => {
    dispatch(setLoadingStatus(true));
    dispatch(setLoadingStatus("fetching"));
    try {
      const response = await axios.get(
        `http://data.fixer.io/api/latest?access_key=${REACT_APP_API_KEY}`
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
