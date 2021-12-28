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
