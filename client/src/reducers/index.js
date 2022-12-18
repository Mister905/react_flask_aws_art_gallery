import { combineReducers } from "@reduxjs/toolkit";
import upload_reducer from "./upload_reducer";
import gallery_reducer from "./gallery_reducer";

export default combineReducers({
  upload: upload_reducer,
  gallery: gallery_reducer,
});
