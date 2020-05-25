import { combineReducers } from "redux";
import authReducer from "../reducers/AuthReducer";

export default combineReducers({
  auth: authReducer,
});
