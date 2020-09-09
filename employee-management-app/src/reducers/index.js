import { combineReducers } from "redux";
import employeeReducer from "./employeeReducer";
import DetailsReducer from "./DetailsReducer";
export default combineReducers({
  employeeReducer,
  DetailsReducer,
});
