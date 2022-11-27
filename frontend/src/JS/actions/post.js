import axios from "axios";
import {
  DELETE_POST_FAIL,
  DELETE_POST_SUCCESS,
  EDIT_POST_FAIL,
  EDIT_POST_SUCCESS,
  GET_POST_FAIL,
  GET_POST_LOADING,
  GET_POST_SUCCESS,
  POST_FAIL,
  POST_SUCCESS,
} from "../const/post";

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
  dispatch({ type: GET_POST_LOADING });
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

export const delPost = (postID, lawyerID) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.delete(
      `http://localhost:5000/api/v1/post/${postID}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: DELETE_POST_SUCCESS, payload: response.data });
    dispatch(getPost(lawyerID));
  } catch (error) {
    dispatch({ type: DELETE_POST_FAIL, payload: error });
    console.log(error);
  }
};

export const editPost = (postID, newPost, lawyerID) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.put(
      `http://localhost:5000/api/v1/post/${postID}`,
      {newPost},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch({ type: EDIT_POST_SUCCESS, payload: response.data });
    dispatch(getPost(lawyerID));
  } catch (error) {
    dispatch({ type: EDIT_POST_FAIL, payload: error });
    console.log(error);
  }
};
