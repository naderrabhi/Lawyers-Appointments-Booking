import axios from "axios";
import { GET_POST_FAIL, GET_POST_LOADING, GET_POST_SUCCESS, POST_FAIL, POST_SUCCESS } from "../const/post";

export const addPost = (post) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(
      `http://localhost:5000/api/v1/post`,
      post,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: POST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: POST_FAIL, payload: error });
    console.log(error);
  }
};

export const getPost = (lawyerID) => async (dispatch) => {
  dispatch({ type: GET_POST_LOADING});
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      `http://localhost:5000/api/v1/post/?lawyerID=${lawyerID}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: GET_POST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_POST_FAIL, payload: error });
    console.log(error);
  }
};
