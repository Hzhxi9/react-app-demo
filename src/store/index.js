import { combineReducers } from "redux";
import auth from "./auth";
import flashMessage from "./flashMessages";

const rooStore = combineReducers({
  auth,
  flashMessage,
});

export default rooStore;
