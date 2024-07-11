import {
    FETCH_USER_DASHBOARD_DATA,
    FETCH_USER_DASHBOARD_DATA_SUCCESS,
    FETCH_USER_DASHBOARD_DATA_FAILED,
    FETCH_USER_ACCOUNT_SETTINGS,
    FETCH_USER_ACCOUNT_SETTINGS_SUCCESS,
    FETCH_USER_ACCOUNT_SETTINGS_FAILED,
    SAVE_USER_ACCOUNT_SETTINGS,
    SAVE_USER_ACCOUNT_SETTINGS_SUCCESS,
    SAVE_USER_ACCOUNT_SETTINGS_FAILED,
    CHANGE_USER_PASSWORD,
    CHANGE_USER_PASSWORD_SUCCESS,
    CHANGE_USER_PASSWORD_FAILED,
    FETCH_SELLER_WISHLIST_DATA,
    FETCH_SELLER_WISHLIST_DATA_SUCCESS,
    FETCH_SELLER_WISHLIST_DATA_FAILED,
    REMOVE_WISHLIST,
REMOVE_WISHLIST_SUCCESS,
REMOVE_WISHLIST_FAILED,
    
  } from "@/states/actions/actionTypes";
  
  const initialState = {
    isLoading: true,
    isFormProcessing: false,
    isPassChangeProcessing: false,
    content: {},
    mem: {},
    error: false,
    favourites: {},
    isRemoving: false,
  };
  
  export default function (state = initialState, { type, payload }) {
    switch (type) {
      case FETCH_USER_DASHBOARD_DATA:
        return {
          ...state,
          isLoading: true,
          mem: {},
          
        };
      case FETCH_USER_DASHBOARD_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          content: payload,
          mem: payload.member,
          
        };
      case FETCH_USER_DASHBOARD_DATA_FAILED:
        return {
          ...state,
          isLoading: false,
          mem: {},
          error: payload,
          
        };
  
      case FETCH_USER_ACCOUNT_SETTINGS:
        return {
          ...state,
          isLoading: true,
          mem: {},
        };
      case FETCH_USER_ACCOUNT_SETTINGS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          content: payload,
          mem: payload.member,
        };
      case FETCH_USER_ACCOUNT_SETTINGS_FAILED:
        return {
          ...state,
          isLoading: false,
          mem: {},
          error: payload,
        };
  
      case SAVE_USER_ACCOUNT_SETTINGS:
        return {
          ...state,
          isFormProcessing: true,
        };
      case SAVE_USER_ACCOUNT_SETTINGS_SUCCESS:
        return {
          ...state,
          isFormProcessing: false,
        };
      case SAVE_USER_ACCOUNT_SETTINGS_FAILED:
        return {
          ...state,
          isFormProcessing: false,
          error: payload,
        };
  
      case CHANGE_USER_PASSWORD:
        return {
          ...state,
          isPassChangeProcessing: true,
        };
      case CHANGE_USER_PASSWORD_SUCCESS:
        return {
          ...state,
          isPassChangeProcessing: false,
        };
      case CHANGE_USER_PASSWORD_FAILED:
        return {
          ...state,
          isPassChangeProcessing: false,
          error: payload,
        };

        case FETCH_SELLER_WISHLIST_DATA:
        return {
          ...state,
          isLoading: true,
          mem: {},
          
        };
      case FETCH_SELLER_WISHLIST_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          content: payload,
          mem: payload.member,
          favourites: payload.favourites
          
        };
      case FETCH_SELLER_WISHLIST_DATA_FAILED:
        return {
          ...state,
          isLoading: false,
          mem: {},
          error: payload,
          
        };

        case REMOVE_WISHLIST:
        return {
          ...state,
          isRemoving: true,
        };
      case REMOVE_WISHLIST_SUCCESS:
        return {
          ...state,
          isRemoving: false,
          favourites: payload.favourites,
        };
      case REMOVE_WISHLIST_FAILED:
        return {
          ...state,
          isRemoving: false,
          error: payload,
        };

      default:
        return state;
    }
  }
  