import * as types from "../types";
import axios from "axios";

export const countryAction = () => async (dispatch) => {
  const countryUrl = await axios.get("https://restcountries.com/v3.1/all");

  dispatch({
    type: types.FETCH_COUNTRIES,
    payload: {
      allCountries: countryUrl.data,
    },
  });
};

export const SearchCountry = (name) => async (dispatch) => {
  const search = await axios.get(`https://restcountries.com/v3.1/name/${name}`);

  dispatch({
    type: types.SEARCH_COUNTRY,
    payload: {
      searched: search.data,
    },
  });
};

export const CountryRegion = (region) => async (dispatch) => {
  const regionUrl = await axios.get(
    `https://restcountries.com/v3.1/region/${region}`
  );

  dispatch({
    type: types.REGION,
    payload: {
      regions: regionUrl.data,
    },
  });
};
