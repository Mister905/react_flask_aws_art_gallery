import { GET_GALLERY_LIST } from "./types.js";

import instance from "../utils/axios.js";

export const get_gallery_list = () => async (dispatch) => {
  try {
    const res = await instance.get("/gallery");

    if (res.data.error) {
      console.log(res.data);
    } else {
      dispatch({
        type: GET_GALLERY_LIST,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
