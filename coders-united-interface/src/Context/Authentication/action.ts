import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./constants";

export const loginUser = (dispatch, loginPayload) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    dispatch({ type: LOGIN_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE });
  }
};

export const logout = (dispatch) => {
  dispatch({ type: LOGOUT });
};
