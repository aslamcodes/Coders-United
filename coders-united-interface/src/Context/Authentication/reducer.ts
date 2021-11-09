import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./constants";

export const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  errorMessage: null,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.errorMessage,
      };

    case "LOGOUT":
      return {
        ...state,
        user: "",
        token: "",
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
