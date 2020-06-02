import * as types from "../actions/types/userActionTypes";

export const initialState = {
  user: { email: "test@testemail.com" },
  loggedIn: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    // LOGIN
    case types.LOGIN_REQUEST:
      return { ...state, loggingIn: true };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };
    case types.LOGIN_FAILURE:
      return { ...state, loggingIn: false };
    default:
      return state;
  }
};
