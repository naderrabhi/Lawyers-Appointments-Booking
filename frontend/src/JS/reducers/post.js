import { GET_POST_FAIL, GET_POST_LOADING, GET_POST_SUCCESS, POST_FAIL, POST_SUCCESS } from "../const/post";
const initialState = {
  loading: false,
  error: null,
  newPost: {},
  Posts : []
};

export const post = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_SUCCESS:
      return { ...state, loading: false, newPost: payload };
    case POST_FAIL:
      return { ...state, loading: false, error: payload };
      
    case GET_POST_SUCCESS:
      return { ...state, loading: false, Posts: payload };
    case GET_POST_FAIL:
      return { ...state, loading: false, error: payload };
    case GET_POST_LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
};
