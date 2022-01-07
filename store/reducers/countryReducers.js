import * as types from "../types";

const initState = {
  allCountries: [],
  darkMode: false,
  search: [],
};

const countryReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES":
      return { ...state, allCountries: action.payload.allCountries };
    case "SEARCH_COUNTRY":
      return { ...state, search: action.payload.searched };
    default:
      return { ...state };
  }
};
export default countryReducer;
