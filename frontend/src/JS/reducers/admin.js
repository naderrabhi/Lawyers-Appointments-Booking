import {
  DELETE_APPOINMENT_USER_FAIL,
  DELETE_APPOINMENT_USER_SUCCESS,
  DELETE_POST_USER_FAIL,
  DELETE_POST_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_SUCCESS,
  GET_ALL_USER_FAIL,
  GET_ALL_USER_LOADING,
  GET_ALL_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
} from "../const/admin";

const initialState = { loading: false, error: null, User: {}, Users: [],UserApp : {},UserPost : {}};

export const admin = (state = initialState, { type, payload }) => {
  switch (type) {
    
    case GET_ALL_USER_LOADING:
      return { ...state, loading: true };
    case GET_ALL_USER_SUCCESS:
      return { ...state, loading: false, Users: payload };
    case GET_ALL_USER_FAIL:
      return { ...state, loading: false, error: payload };

    case DELETE_USER_SUCCESS:
      return { ...state, loading: false, User: payload };
    case DELETE_USER_FAIL:
      return { ...state, loading: false, error: payload };

    case DELETE_APPOINMENT_USER_SUCCESS:
      return { ...state, loading: false, UserApp: payload };
    case DELETE_APPOINMENT_USER_FAIL:
      return { ...state, loading: false, error: payload };

    case DELETE_POST_USER_SUCCESS:
      return { ...state, loading: false, UserPost: payload };
    case DELETE_POST_USER_FAIL:
      return { ...state, loading: false, error: payload };

    case GET_USER_SUCCESS:
      return { ...state, loading: false, User: payload };
    case GET_USER_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
