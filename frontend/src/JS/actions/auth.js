import axios from "axios";
import {
  GET_CURRENT_USER_FAIL,
  GET_CURRENT_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../const/auth";
import { setAlert } from "./alert";

export const registerLawyer = (newLawyer, navigate) => async (dispatch) => {
  dispatch({ type: REGISTER_LOADING });
  try {
    const response = await axios.post(
      `http://localhost:5000/api/v1/auth/lawyer/register`,
      newLawyer
    );
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    dispatch(setAlert(response.data.msg,"success"));
    navigate("/login");
  } catch (error) {
    const { errors, msg } = error.response.data;
    console.log(errors);
    console.log(error);
    if (Array.isArray(errors)) {
      errors.map((err) => dispatch(setAlert(err.msg, "danger")));
    }
    if (msg) {
      dispatch(setAlert(msg, "danger"));
    }
    dispatch({ type: REGISTER_FAIL, payload: error });
  }
};

export const registerClient = (newClient, navigate) => async (dispatch) => {
  dispatch({ type: REGISTER_LOADING });
  try {
    const response = await axios.post(
      `http://localhost:5000/api/v1/auth/client/register`,
      newClient
    );
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    dispatch(setAlert(response.data.msg,"success"));
    navigate("/login");
  } catch (error) {
    const { errors, msg } = error.response.data;
    console.log(errors);
    console.log(error);
    if (Array.isArray(errors)) {
      errors.map((err) => dispatch(setAlert(err.msg, "danger")));
    }
    if (msg) {
      dispatch(setAlert(msg, "danger"));
    }
    dispatch({ type: REGISTER_FAIL, payload: error });
  }
};

export const loginUser = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  try {
    const response = await axios.post(
      `http://localhost:5000/api/v1/auth/login`,
      user
    );
    if (response.data.user.role === "admin") {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      dispatch(setAlert(response.data.msg,"success"));
      navigate("/dashboard");
    }
    if (response.data.user.role === "lawyer") {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      dispatch(setAlert(response.data.msg,"success"));
      navigate("/profile");
    }
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    dispatch(setAlert(response.data.msg,"success"));
    navigate("/profile");
  } catch (error) {
    const { errors, msg } = error.response.data;
    console.log(errors);
    console.log(error);
    if (Array.isArray(errors)) {
      errors.map((err) => dispatch(setAlert(err.msg, "danger")));
    }
    if (msg) {
      dispatch(setAlert(msg, "danger"));
    }
    dispatch({ type: LOGIN_FAIL, payload: error });
  }
};

export const getCurrentUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      `http://localhost:5000/api/v1/auth/current`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_CURRENT_USER_FAIL, payload: error });
    console.log(error);
  }
};

export const logOut = () => {
  return {
    type: LOGOUT,
  };
};
