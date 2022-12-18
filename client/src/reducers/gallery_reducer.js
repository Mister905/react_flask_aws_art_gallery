import { GET_GALLERY_LIST } from "../actions/types";

const initial_state = {
  gallery_list: [],
  loading_gallery_list: true,
};

export default function (state = initial_state, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_GALLERY_LIST:
      return {
        ...state,
        gallery_list: payload.gallery_list,
        loading_gallery_list: false,
      };

    default:
      return state;
  }
}
