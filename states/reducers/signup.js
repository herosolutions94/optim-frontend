import {
    CREATE_ACCOUNT_MESSAGE,
    CREATE_ACCOUNT_MESSAGE_SUCCESS,
    CREATE_ACCOUNT_MESSAGE_FAILED,
    VERIFY_EMAIL,
    VERIFY_EMAIL_SUCCESS,
    VERIFY_EMAIL_FAILED,
   
  } from "../actions/actionTypes";
  import { setCookie } from "cookies-next";
  
  const initialState = {
    isLoading: true,
    content: {},
    error: false,
    isFormProcessing: false,
   
  };
  
  export default function (state = initialState, { type, payload }) {
    switch (type) {
      case CREATE_ACCOUNT_MESSAGE:
        return {
          ...state,
          isFormProcessing: true,
        };
      case CREATE_ACCOUNT_MESSAGE_SUCCESS:
        // localStorage.setItem("email", payload.email);
        setCookie("authToken", payload.authToken);
        return {
          ...state,
          isFormProcessing: false,
        };
      case CREATE_ACCOUNT_MESSAGE_FAILED:
        return {
          ...state,
          isFormProcessing: false,
          error: payload,
        };
      
      case VERIFY_EMAIL:
        return {
          ...state,
          isFormProcessing: true,
        };
      case VERIFY_EMAIL_SUCCESS:
        // localStorage.removeItem("email");
        setCookie("authToken", payload.authToken);
        return {
          ...state,
          isFormProcessing: true,
        };
      case VERIFY_EMAIL_FAILED:
        return {
          ...state,
          isFormProcessing: false,
          error: payload,
        };
      default:
        return state;
    }
  }
  