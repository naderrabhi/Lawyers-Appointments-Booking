import {
  DEL_USER_FAIL,
  DEL_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  PUT_USER_FAIL,
  PUT_USER_SUCCESS,
} from "../const/user";

const initialState = { loading: false, error: null, newUser: {}, User: {} };

export const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_LOADING:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return { ...state, loading: false, User: payload };
    case GET_USER_FAIL:
      return { ...state, loading: false, error: payload };

    case PUT_USER_SUCCESS:
      return { ...state, loading: false, newUser: payload };
    case PUT_USER_FAIL:
      return { ...state, loading: false, error: payload };

    case DEL_USER_SUCCESS:
      return { ...state, loading: false, User: payload };
    case DEL_USER_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
