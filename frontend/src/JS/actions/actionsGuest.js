import axios from "axios";

const { GET_ALL_LAWYER_GUEST_SUCCESS, GET_ALL_LAWYER_GUEST_FAIL, GET_ALL_LAWYER_GUEST_LOADING, GET_ONE_LAWYER_GUEST_SUCCESS, GET_ONE_LAWYER_GUEST_FAIL } = require("../const/constGuest");

export const getLawyersGuest = (value,query) => async dispatch => {
    dispatch({type : GET_ALL_LAWYER_GUEST_LOADING})
    try {
        const response = await axios.get(`http://localhost:5000/api/v1/users/all_lawyers/?specialty=${value}&name=${query}`)
        dispatch({ type: GET_ALL_LAWYER_GUEST_SUCCESS, payload: response.data });
      } catch (error) {
        dispatch({ type: GET_ALL_LAWYER_GUEST_FAIL, payload: error });
          console.log(error);
      }
}

export const getOneLawyerGuest = (id) => async dispatch => {
  
  try {
    const response = await axios.get(`http://localhost:5000/api/v1/users/${id}`)
    dispatch({ type: GET_ONE_LAWYER_GUEST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_ONE_LAWYER_GUEST_FAIL, payload: error });
          console.log(error);
  }
}