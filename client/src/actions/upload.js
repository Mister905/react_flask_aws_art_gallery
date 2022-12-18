import { UPLOAD_IMAGE } from "./types.js";

import instance from "../utils/axios.js";

export const upload_image = (form_data, navigate) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  try {
    const res = await instance.post("/upload", form_data, config);

    if (res.data.error) {
      console.log(res.data);
    } else {
      console.log("success");

      navigate("/");
    }
  } catch (error) {
    console.log(error);
  }
};
