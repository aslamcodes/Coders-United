import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./constants";

export const initialState = {
  user: JSON.parse(localStorage.getItem("userInfo")) || null,
  isLoading: false,
  errorMessage: null,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isLoading: true,
        user: null,
        errorMessage: null,
      };

    case LOGIN_SUCCESS:
      return {
        isLoading: false,
        user: action.payload,
        errorMessage: null,
      };

    case LOGIN_FAILURE:
      return {
        user: null,
        isLoading: false,
        errorMessage: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        user: "",
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
