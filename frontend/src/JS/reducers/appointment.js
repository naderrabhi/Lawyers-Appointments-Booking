import {
  DEL_APPOINTMENT_FAIL,
  DEL_APPOINTMENT_SUCCESS,
  GET_APPOINTMENTS_FAIL,
  GET_APPOINTMENTS_LOADING,
  GET_APPOINTMENTS_SUCCESS,
  GET_ONE_APPOINTMENT_FAIL,
  GET_ONE_APPOINTMENT_LOADING,
  GET_ONE_APPOINTMENT_SUCCESS,
  POST_APPOINTMENT_FAIL,
  POST_APPOINTMENT_SUCCESS,
} from "../const/appointment";

const initialState = {
  loading: false,
  error: null,
  newAppointment: {},
  Appointment: {},
  oneAppointment: {},
  Appointments: [],
};

export const appointment = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_APPOINTMENTS_LOADING:
      return { ...state, loading: true };
    case GET_APPOINTMENTS_SUCCESS:
      return { ...state, loading: false, Appointments: payload };
    case GET_APPOINTMENTS_FAIL:
      return { ...state, loading: false, error: payload };

    case GET_ONE_APPOINTMENT_LOADING:
      return { ...state, loading: true };
    case GET_ONE_APPOINTMENT_SUCCESS:
      return { ...state, loading: false, oneAppointment: payload };
    case GET_ONE_APPOINTMENT_FAIL:
      return { ...state, loading: false, error: payload };

    case POST_APPOINTMENT_SUCCESS:
      return { ...state, loading: false, newAppointment: payload };
    case POST_APPOINTMENT_FAIL:
      return { ...state, loading: false, error: payload };

    case DEL_APPOINTMENT_SUCCESS:
      return { ...state, loading: false, Appointment: payload };
    case DEL_APPOINTMENT_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
