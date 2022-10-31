const {
  LOGIN_SUCCESS,
  GET_CURRENT_USER_SUCCESS,
  LOGOUT,
} = require("../const/auth");

const initialState = { loading: false, error: null,User: {} };

export const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return { ...state, User: payload.user };
    case GET_CURRENT_USER_SUCCESS:
      return { ...state, User: payload };
    case LOGOUT:
      localStorage.removeItem("token");
      return { loading: false, User: {}, error: null };
    default:
      return state;
  }
};
