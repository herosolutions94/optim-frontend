import http from "@/helpers/http";
import httpBlob from "@/helpers/http-blob";
import { doObjToFormData } from "@/helpers/helpers";
import { toast } from "react-hot-toast";
import { SUCCESSFUL_ACCOUNT_SETTINGS_CHANGED, SUCCESSFUL_PASSWORD_CHANGED } from "@/constants/messages";

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
 
} from "../actionTypes";
import Text from "@/components/text";
import { authToken } from "@/helpers/authToken";
import useRedirectInvalidToken from "@/helpers/useRedirectInvalidToken";

export const fetchUserDashboardData = () => (dispatch) => {
  dispatch({
    type: FETCH_USER_DASHBOARD_DATA,
    payload: null,
  });
  http
    .post("user/user-dashboard", doObjToFormData({ token: authToken() }))
    .then(({ data }) => {
      // console.log(data);
      dispatch({
        type: FETCH_USER_DASHBOARD_DATA_SUCCESS,
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);

      dispatch({
        type: FETCH_USER_DASHBOARD_DATA_FAILED,
        payload: error,
      });

      toast.error("Technical Issue", { duration: 4000 });

      useRedirectInvalidToken();
    });
};

export const saveUserAccountSettings = (formData) => (dispatch) => {
  formData = { ...formData, token: authToken() };
  let file = formData.profile;
  delete formData.profile;
  formData = doObjToFormData(formData);
  if (typeof file != "undefined") formData.append("profile", file[0]);
  // console.log(formData);

  dispatch({
    type: SAVE_USER_ACCOUNT_SETTINGS,
    payload: null,
  });
  httpBlob
    .post("user/save-user-profile-settings", formData)
    .then(({ data }) => {
      if (data.status) {
        toast.success(SUCCESSFUL_ACCOUNT_SETTINGS_CHANGED, { duration: 6000 });
        dispatch({
          type: SAVE_USER_ACCOUNT_SETTINGS_SUCCESS,
          payload: data,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        if (data.validationErrors) {
          toast.error(<Text string={data.validationErrors} parse={true} />, {
            duration: 6000,
          });
          dispatch({
            type: SAVE_USER_ACCOUNT_SETTINGS_FAILED,
            payload: null,
          });
        }
      }
    })
    .catch((error) => {
      toast.error("Technical Issue", { duration: 4000 });
      dispatch({
        type: SAVE_USER_ACCOUNT_SETTINGS_FAILED,
        payload: error,
      });
      // useRedirectInvalidToken();
    });
};

export const changeUserPassword = (formData) => (dispatch) => {
  formData = { ...formData, token: authToken() };
  dispatch({
    type: CHANGE_USER_PASSWORD,
    payload: null,
  });
  http
    .post("user/change-password", doObjToFormData(formData))
    .then(({ data }) => {
      if (data.status) {
        toast.success(SUCCESSFUL_PASSWORD_CHANGED);
        dispatch({
          type: CHANGE_USER_PASSWORD_SUCCESS,
          payload: data,
        });
      } else {
        if (data.validationErrors) {
          toast.error(<Text string={data.validationErrors} parse={true} />, {
            duration: 6000,
          });
          dispatch({
            type: CHANGE_USER_PASSWORD_FAILED,
            payload: null,
          });
        }
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: CHANGE_USER_PASSWORD_FAILED,
        payload: error,
      });
      toast.error("Technical Issue", { duration: 4000 });
      // useRedirectInvalidToken();
    });
};


export const fetchUserWishlist = () => (dispatch) => {
  dispatch({
    type: FETCH_SELLER_WISHLIST_DATA,
    payload: null,
  });
  http
    .post("user/user-favourites", doObjToFormData({ token: authToken() }))
    .then(({ data }) => {
      // console.log(data);
      dispatch({
        type: FETCH_SELLER_WISHLIST_DATA_SUCCESS,
        payload: data,
      });
    })
    .catch((error) => {
      console.log(error);
      
      dispatch({
        type: FETCH_SELLER_WISHLIST_DATA_FAILED,
        payload: error,
      });
      
        toast.error('Technical Issue', {duration : 4000});

      useRedirectInvalidToken();
    });
};

export const removeFromWishlist = (formData) => (dispatch) => {
  formData = { ...formData, token: authToken() };
  dispatch({
    type: REMOVE_WISHLIST,
    payload: null,
  });
  http
    .post("user/remove-from-favourties", doObjToFormData(formData))
    .then(({ data }) => {
      if (data.status) {
        if(data.removed){
          toast.error('Removed from favourites')
        }
        dispatch({
          type: REMOVE_WISHLIST_SUCCESS,
          payload: data,
        });
      } else {
        if (data.validationErrors) {
          toast.error(<Text string={data.validationErrors} parse={true} />, {
            duration: 6000,
          });
          dispatch({
            type: REMOVE_WISHLIST_FAILED,
            payload: null,
          });
        }
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: REMOVE_WISHLIST_FAILED,
        payload: error,
      });
      toast.error("Technical Issue", { duration: 4000 });
      // useRedirectInvalidToken();
    });
};