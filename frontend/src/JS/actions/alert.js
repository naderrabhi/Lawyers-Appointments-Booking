import { v4 as uuid_v4 } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from '../const/alert';

export const setAlert = (msg, variant, timeout = 5000) => dispatch => {
  const id = uuid_v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, variant, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};