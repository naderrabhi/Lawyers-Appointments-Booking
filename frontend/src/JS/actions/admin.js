import axios from "axios";
import { DELETE_USER_FAIL, DELETE_USER_SUCCESS, GET_ALL_USER_FAIL, GET_ALL_USER_LOADING, GET_ALL_USER_SUCCESS, GET_USER_FAIL, GET_USER_SUCCESS } from "../const/admin";
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

export const deleteUser = (id) => async (dispatch) => {
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
    dispatch(getAllUser());
  } catch (error) {
    dispatch({ type: DELETE_USER_FAIL, payload: error });
    dispatch(setAlert({msg : error.response.data.msg, variant : 'danger'}));
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
