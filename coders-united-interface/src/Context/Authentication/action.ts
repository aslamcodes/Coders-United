import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./constants";
import axios from "axios";

export const loginUser = async (
  dispatch: React.Dispatch<any>,
  loginPayload
) => {
  dispatch({ type: LOGIN_REQUEST });

  const { email, password } = loginPayload;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const { data } = await axios.post(
      "/users/login",
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: LOGOUT });
  document.location.href = "/users/login";
};
