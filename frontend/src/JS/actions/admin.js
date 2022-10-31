import axios from 'axios'
import { DELETE_USER_FAIL, DELETE_USER_SUCCESS, GET_ALL_CLIENT_FAIL, GET_ALL_CLIENT_SUCCESS, GET_ALL_LAWYER_FAIL, GET_ALL_LAWYER_SUCCESS, GET_ALL_USER_FAIL, GET_ALL_USER_SUCCESS, GET_SEARCH_FAIL, GET_SEARCH_SUCCESS, GET_USER_FAIL, GET_USER_SUCCESS } from '../const/admin';

export const getAllUser = () => async dispatch => {
  const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/admin`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
        })
      dispatch({ type: GET_ALL_USER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_ALL_USER_FAIL, payload: error });
        console.log(error);
    }
}

export const getAllLawyer = () => async dispatch => {
  const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/admin/lawyers`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
        })
      console.log(response);
      dispatch({ type: GET_ALL_LAWYER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_ALL_LAWYER_FAIL, payload: error });
        console.log(error);
    }
}

export const getAllClient = () => async dispatch => {
  const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/admin/clients`,{
        headers: {
          Authorization: `Bearer ${token}`
        }
        })
      console.log(response);
      dispatch({ type: GET_ALL_CLIENT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_ALL_CLIENT_FAIL, payload: error });
        console.log(error);
    }
}

export const deleteUser = (id) => async dispatch => {
  const token = localStorage.getItem("token");
    try {
        const response = await axios.delete(`http://localhost:5000/api/v1/admin/${id}`,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch({type : DELETE_USER_SUCCESS, payload: response.data})
        dispatch(getAllUser())
    } catch (error) {
      dispatch({ type: DELETE_USER_FAIL, payload: error });
        console.log(error);
    }
}

export const getUser = (id) => async dispatch => {
  const token = localStorage.getItem("token");
    try {
        const response = await axios.get(`http://localhost:5000/api/v1/admin/${id}`,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch({type : GET_USER_SUCCESS, payload: response.data})
    } catch (error) {
      dispatch({ type: GET_USER_FAIL, payload: error });
        console.log(error);
    }
}

export const searchByName = (query) => async dispatch => {
  const token = localStorage.getItem("token");
    try {
        const response = await axios.get(`http://localhost:5000/api/v1/admin/search/?name=${query}`,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        dispatch({type : GET_SEARCH_SUCCESS, payload: response.data})
    } catch (error) {
      dispatch({ type: GET_SEARCH_FAIL, payload: error });
        console.log(error);
    }
}