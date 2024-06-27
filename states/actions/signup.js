import http from "@/helpers/http";
import { doObjToFormData } from "@/helpers/helpers";
import toast from "react-hot-toast";
import Text from "@/components/text";
import { SUCCESSFUL_SIGNUP_MESSAGE, SUCCESSFUL_EMAIL_VERIFICATION} from "@/constants/messages";

import {
  CREATE_ACCOUNT_MESSAGE,
  CREATE_ACCOUNT_MESSAGE_SUCCESS,
  CREATE_ACCOUNT_MESSAGE_FAILED,
  VERIFY_EMAIL,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAILED,
} from "./actionTypes";
import { setCookie } from "cookies-next";

export const createAccount = (formData) => (dispatch) => {
  formData = doObjToFormData(formData);
  dispatch({
    type: CREATE_ACCOUNT_MESSAGE,
    payload: null,
  });
  http
    .post("create-account", formData)
    .then(({ data }) => {
      console.log(data);
      if (data.status) {
        toast.success(SUCCESSFUL_SIGNUP_MESSAGE, { duration: 6000 });
        dispatch({
          type: CREATE_ACCOUNT_MESSAGE_SUCCESS,
          payload: data,
        });
        setTimeout(() => {
          setCookie("mem_type", data.mem_type);
          window.location.replace("/email-verification");
        }, 2000);
      } else {
        if (data.validationErrors) {
          toast.error(<Text string={data.validationErrors} parse={true} />, {
            duration: 6000,
          });
          dispatch({
            type: CREATE_ACCOUNT_MESSAGE_FAILED,
            payload: null,
          });
        }
      }
    })
    .catch((error) => {
      toast.error(
        "Technical Problem Occured Please Try Again or contatct Admin",
        { duration: 2000 }
      );
      dispatch({
        type: CREATE_ACCOUNT_MESSAGE_FAILED,
        payload: error,
      });
      // setTimeout(() => {
      //     window.location.replace("/email-verification");
      //   }, 3000);
    });
};

export const verifyEmail = (formData) => (dispatch) => {
  formData = doObjToFormData(formData);
  dispatch({
    type: VERIFY_EMAIL,
    payload: null,
  });
  http
    .post("verify-otp", formData)
    .then(({ data }) => {
      console.log(data);
      if (data.status) {
        toast.success(SUCCESSFUL_EMAIL_VERIFICATION, { duration: 6000 });
        dispatch({
          type: VERIFY_EMAIL_SUCCESS,
          payload: data,
        });
        setTimeout(() => {
          setCookie("mem_type", data.mem_type);

          if (data.mem_type == "member") {
            window.location.replace(`/`);
          }
          //  else if (data.mem_type == "seler") {
          //   window.location.replace("/seller");
          // }
        }, 2000);
      } else {
        if (data.validationErrors) {
          toast.error(<Text string={data.validationErrors} parse={true} />, {
            duration: 6000,
          });
          dispatch({
            type: VERIFY_EMAIL_FAILED,
            payload: null,
          });
        }
      }
    })
    .catch((error) => {
      dispatch({
        type: VERIFY_EMAIL_FAILED,
        payload: error,
      });
    });
};
