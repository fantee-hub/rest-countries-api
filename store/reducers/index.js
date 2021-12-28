import { combineReducers } from "redux";
import countryReducer from "./countryReducers";

export default combineReducers({
  countries: countryReducer,
});
