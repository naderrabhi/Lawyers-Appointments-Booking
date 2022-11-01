import {
  POST_PROFILE_SUCCESS,
  POST_PROFILE_FAIL,
  GET_PROFILES_FAIL,
  GET_PROFILES_LOADING,
  GET_PROFILES_SUCCESS,
  GET_ONE_PROFILE_FAIL,
  GET_ONE_PROFILE_SUCCESS,
  GET_ONE_PROFILE_LOADING,
  DEL_PROFILE_SUCCESS,
  DEL_PROFILE_FAIL,
} from "../const/profile.js";

const initialState = {
  loading: false,
  error: null,
  newProfile: {},
  Profile: {},
  Profiles: [],
};

export const profile = (state = initialState, { type, payload }) => {

  switch (type) {

    case POST_PROFILE_SUCCESS:
      return { ...state, loading: false, newProfile: payload };
    case POST_PROFILE_FAIL:
      return { ...state, loading: false, error: payload };

    case GET_PROFILES_LOADING:
      return { ...state, loading: true };
    case GET_PROFILES_SUCCESS:
      return { ...state, loading: false, Profiles: payload };
    case GET_PROFILES_FAIL:
      return { ...state, loading: false, error: payload };

    case GET_ONE_PROFILE_LOADING:
      return { ...state, loading: true };
    case GET_ONE_PROFILE_SUCCESS:
      return { ...state, loading: false, Profile: payload };
    case GET_ONE_PROFILE_FAIL:
      return { ...state, loading: false, error: payload };

    case DEL_PROFILE_SUCCESS:
      return { ...state, loading: false, Profile: payload };
    case DEL_PROFILE_FAIL:
      return { ...state, loading: false, error: payload };
      
    default:
      return state;
  }
};
