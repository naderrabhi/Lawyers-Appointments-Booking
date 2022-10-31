import axios from "axios";
import { GET_PROFILE_FAIL, GET_PROFILE_SUCCESS, POST_PROFILE_FAIL, POST_PROFILE_SUCCESS } from "../const/constProfile";

export const postProfile = (profile) => async (dispatch) => {
  const token = localStorage.getItem("token");
  console.log(token)
  try {
    const response = await axios.put(
      `http://localhost:5000/api/v1/profiles/`,
      profile,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    dispatch({type : POST_PROFILE_SUCCESS, payload: response.data})
    dispatch(getProfile())
  } catch (error) {
    dispatch({ type: POST_PROFILE_FAIL, payload: error });
    console.log(error);
  }
};


export const getProfile = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      `http://localhost:5000/api/v1/profiles/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({type : GET_PROFILE_SUCCESS, payload: response.data})
  } catch (error) {
    dispatch({ type: GET_PROFILE_FAIL, payload: error });
    console.log(error);
  }
};
