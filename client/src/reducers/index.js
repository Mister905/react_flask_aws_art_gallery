import { combineReducers } from "@reduxjs/toolkit";
import upload_reducer from "./upload_reducer";

export default combineReducers({
  upload: upload_reducer,
});
