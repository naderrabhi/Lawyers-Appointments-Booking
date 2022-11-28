import axios from "axios";
import {POST_PROFILE_FAIL, POST_PROFILE_SUCCESS , GET_PROFILES_FAIL, GET_PROFILES_LOADING, GET_PROFILES_SUCCESS, GET_ONE_PROFILE_LOADING, GET_ONE_PROFILE_SUCCESS, GET_ONE_PROFILE_FAIL, GET_My_PROFILE_SUCCESS, GET_My_PROFILE_FAIL, GET_My_PROFILE_LOADING, DEL_PROFILE_SUCCESS, DEL_PROFILE_FAIL } from "../const/profile.js";

export const postProfile = (profile) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.put(
      `http://localhost:5000/api/v1/profiles`,
      profile,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({type : POST_PROFILE_SUCCESS, payload: response.data})
    dispatch(getMyProfile())
  } catch (error) {
    dispatch({ type: POST_PROFILE_FAIL, payload: error });
    console.log(error);
  }
};


export const getAllProfiles = (specialty,name,address) => async (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({type : GET_PROFILES_LOADING})
  try {
    const response = await axios.get(
      `http://localhost:5000/api/v1/profiles/?specialty=${specialty}&name=${name}&address=${address}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({type : GET_PROFILES_SUCCESS, payload: response.data})
  } catch (error) {
    dispatch({ type: GET_PROFILES_FAIL, payload: error });
    console.log(error);
  }
};

export const getMyProfile = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({type : GET_My_PROFILE_LOADING})
  try {
    const response = await axios.get(
      `http://localhost:5000/api/v1/profiles/my_profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({type : GET_My_PROFILE_SUCCESS, payload: response.data})
  } catch (error) {
    dispatch({ type: GET_My_PROFILE_FAIL, payload: error });
    console.log(error);
  }
};

export const getOneProfile = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch({type : GET_ONE_PROFILE_LOADING})
  try {
    const response = await axios.get(
      `http://localhost:5000/api/v1/profiles/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({type : GET_ONE_PROFILE_SUCCESS, payload: response.data})
  } catch (error) {
    dispatch({ type: GET_ONE_PROFILE_FAIL, payload: error });
    console.log(error);
  }
};

export const deleteProfile = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/v1/profiles/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: DEL_PROFILE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: DEL_PROFILE_FAIL, payload: error });
    console.log(error);
  }
};