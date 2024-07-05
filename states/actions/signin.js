import http from "@/components/helpers/http";
import { doObjToFormData } from "@/components/helpers/helpers";
import toast from "react-hot-toast";
import Text from "@/components/components/text";
import { SUCCESSFUL_SIGNIN_MESSAGE } from "@/components/constants/messages";
import {
  SIGN_IN_MESSAGE,
  SIGN_IN_MESSAGE_SUCCESS,
  SIGN_IN_MESSAGE_FAILED,
} from "./actionTypes";
import { setCookie } from "cookies-next";

export const signin = (formData, redirectTo) => (dispatch) => {
  dispatch({
    type: SIGN_IN_MESSAGE,
    payload: null,
  });
  http
    .post("auth/save-login", doObjToFormData(formData))
    .then(({ data }) => {
      // console.log(data);
      if (data.status) {
        toast.success(SUCCESSFUL_SIGNIN_MESSAGE, { duration: 6000 });
        dispatch({
          type: SIGN_IN_MESSAGE_SUCCESS,
          payload: data,
        });
        setTimeout(() => {
          setCookie("mem_type", data.mem_type);
          setCookie("memVerified", data.memVerified);
          if (redirectTo) window.location.replace(redirectTo);
          if (data.memVerified == "false" || data.memVerified == false) {
            window.location.replace(`/email-verification`);
          } else {
            if (data.mem_type == "member") {
              if (redirectTo) {
                window.location.replace(redirectTo);
              } 
              else {
                window.location.replace(`/dashboard`);
              }
            }
            // else if (data.mem_type == "seller") {
            //   if (redirectTo) {
            //     window.location.replace(redirectTo);
            //   } else {
            //     window.location.replace(`/seller`);
            //   }
            // }
            localStorage.removeItem("redirect_url");
          }

          localStorage.removeItem("redirect_url");
        }, 2000);
      } else {
        // console.log(data);s
        if (data.validationErrors) {
          toast.error(<Text string={data.validationErrors} parse={true} />, {
            duration: 6000,
          });
          localStorage.setItem("error_msg", data.validationErrors);
          dispatch({
            type: SIGN_IN_MESSAGE_FAILED,
            payload: null,
          });
        }
      }
    })
    .catch((error) => {
      dispatch({
        type: SIGN_IN_MESSAGE_FAILED,
        payload: error,
      });
    });
};
