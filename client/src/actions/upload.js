import { UPLOAD_IMAGE } from "./types.js";

import instance from "../utils/axios.js";

export const upload_image = (form_data, navigate) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };


console.log(form_data)

//   let request_body = JSON.stringify(form_data);

//   console.log(request_body);

    try {
      const res = await instance.post("/upload", form_data, config);

      if (res.data.error) {

        console.log(res.data);

        // dispatch({
        //   type: DISPLAY_MODAL,
        //   payload: {
        //     modal_title: "Error",
        //     modal_body: "Unable to login",
        //     modal_confirmation: "Ok",
        //   },
        // });
      } else {

        console.log('derp');

        console.log(res.data);

        // dispatch({
        //   type: LOGIN_SUCCESS,
        //   payload: res.data,
        // });

        navigate("/");
      }
    } catch (error) {
      console.log(error);
      // dispatch({
      //   type: DISPLAY_MODAL,
      //   payload: {
      //     modal_title: "Error",
      //     modal_body: "Unable to login",
      //     modal_confirmation: "Ok",
      //   },
      // });
    }
};
