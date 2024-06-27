import http from "@/helpers/http";
import { doObjToFormData } from "@/helpers/helpers";
import toast from "react-hot-toast";
import Text from "@/components/text";

import {
  SAVE_NEWSLETTER,
  SAVE_NEWSLETTER_SUCCESS,
  SAVE_NEWSLETTER_FAILED,
} from "./actionTypes";

export const saveNewsletter = (formData) => (dispatch) => {
  dispatch({
    type: SAVE_NEWSLETTER,
    payload: null,
  });
  http
    .post("save-newsletter", doObjToFormData(formData))
    .then(({ data }) => {
      // console.log(data);
      if (data.validation_error) {
        toast.error(<Text string={data.validation_error} parse={true} />, {
          duration: 6000,
        });
      } else {
        toast.success(data?.msg, { duration: 6000 });
      }
      dispatch({
        type: SAVE_NEWSLETTER_SUCCESS,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: SAVE_NEWSLETTER_FAILED,
        payload: error,
      });
    });
};
