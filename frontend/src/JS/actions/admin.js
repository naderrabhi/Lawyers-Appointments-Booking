import axios from "axios";
import {DELETE_POST_USER_SUCCESS, DELETE_POST_USER_FAIL,DELETE_APPOINMENT_USER_FAIL, DELETE_APPOINMENT_USER_SUCCESS, DELETE_USER_FAIL, DELETE_USER_SUCCESS, GET_ALL_USER_FAIL, GET_ALL_USER_LOADING, GET_ALL_USER_SUCCESS, GET_USER_FAIL, GET_USER_SUCCESS } from "../const/admin";
import { setAlert } from "./alert";


export const getAllUser = (role,name) => async (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({type : GET_ALL_USER_LOADING})
  try {
    const response = await axios.get(`http://localhost:5000/api/v1/admin/?role=${role}&name=${name}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: GET_ALL_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_ALL_USER_FAIL, payload: error });
    dispatch(setAlert({msg : error.response.data.msg, variant : 'danger'}));
    console.log(error);
  }
};

export const deleteUser = (id,role,name) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/v1/admin/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: DELETE_USER_SUCCESS, payload: response.data });
    dispatch(setAlert({msg : response.data.msg, variant : 'success'}));
    dispatch(getAllUser(role,name));
  } catch (error) {
    dispatch({ type: DELETE_USER_FAIL, payload: error });
    dispatch(setAlert({msg : error.response.data.msg, variant : 'danger'}));
    console.log(error);
  }
};
export const deleteAppointmentByAdmin = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/v1/admin/app/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: DELETE_APPOINMENT_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: DELETE_APPOINMENT_USER_FAIL, payload: error });
    console.log(error);
  }
};

export const deletePostByAdmin = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/v1/admin/post/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: DELETE_POST_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: DELETE_POST_USER_FAIL, payload: error });
    console.log(error);
  }
};

export const getUser = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      `http://localhost:5000/api/v1/admin/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: GET_USER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_USER_FAIL, payload: error });
    dispatch(setAlert({msg : error.response.data.msg, variant : 'danger'}));
    console.log(error);
  }
};
