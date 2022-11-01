import axios from "axios";
import { DEL_APPOINTMENT_FAIL, DEL_APPOINTMENT_SUCCESS, GET_APPOINTMENTS_FAIL, GET_APPOINTMENTS_LOADING, GET_APPOINTMENTS_SUCCESS, GET_ONE_APPOINTMENT_FAIL, GET_ONE_APPOINTMENT_LOADING, GET_ONE_APPOINTMENT_SUCCESS, POST_APPOINTMENT_FAIL, POST_APPOINTMENT_SUCCESS } from "../const/appointment";

export const createAppointment = (id, newAppointment) => async (dispatch) => {

  const token = localStorage.getItem("token");

  try {
    const response = await axios.post(
      `http://localhost:5000/api/v1/booking/${id}`,
      newAppointment,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({type : POST_APPOINTMENT_SUCCESS,payload : response.data});
  } catch (error) {
    dispatch({ type: POST_APPOINTMENT_FAIL, payload: error });
    console.log(error);
  }
};

export const getAllAppointment = () => async (dispatch) => {
    
    const token = localStorage.getItem("token");
    dispatch({type : GET_APPOINTMENTS_LOADING})
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/booking`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({type : GET_APPOINTMENTS_SUCCESS,payload : response.data});
    } catch (error) {
      dispatch({ type: GET_APPOINTMENTS_FAIL, payload: error });
      console.log(error);
    }
};

export const getOneAppointment = (id) => async (dispatch) => {
    
    const token = localStorage.getItem("token");
    dispatch({type : GET_ONE_APPOINTMENT_LOADING})
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/booking/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({type : GET_ONE_APPOINTMENT_SUCCESS,payload : response.data});
    } catch (error) {
      dispatch({ type: GET_ONE_APPOINTMENT_FAIL, payload: error });
      console.log(error);
    }
};

export const deleteAppointment = (id) => async (dispatch) => {
    
    const token = localStorage.getItem("token");

    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/booking/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({type : DEL_APPOINTMENT_SUCCESS,payload : response.data});
      dispatch(getAllAppointment())
    } catch (error) {
      dispatch({ type: DEL_APPOINTMENT_FAIL, payload: error });
      console.log(error);
    }
};