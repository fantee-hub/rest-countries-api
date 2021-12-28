import * as types from "../types";

const initState = {
  allCountries: [],
  darkMode: false,
};

const countryReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES":
      return { ...state, allCountries: action.payload.allCountries };
    default:
      return { ...state };
  }
};
export default countryReducer;
