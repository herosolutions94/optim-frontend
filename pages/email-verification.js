import React, { useState } from "react";
// import style from "@/styles/scss/web.module.scss";
import Link from "next/link";
import Text from "../components/text";
import OTPInput from "react-otp-input";
import { Toaster, toast } from "react-hot-toast";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { verifyEmail } from "../states/actions/signup";
import { authToken } from "../helpers/authToken";
import http from "../helpers/http";

export default function Logon({ content, memData }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const isFormProcessing = useSelector(
    (state) => state.signup.isFormProcessing
  );

  const handleVerifyEmail = (data, e) => {
    e.preventDefault();
    data = { ...data, token: authToken() };
    // console.log(data);
    dispatch(verifyEmail(data));
  };

  const [emailVerify, setEmailVerify] = useState(false);

  const resendEmail = async (e) => {
    setEmailVerify(true);
    var form_data = new FormData();
    form_data.append("token", authToken());
    form_data.append("email", memData?.mem_email);

    await http.post("resend-email", form_data).then((data) => {
      // console.log(data);
      setEmailVerify(false);
      if (data?.data?.status === 1) {
        toast.success(data?.data?.msg, { duration: 6000 });
      } else {
        if (data?.data?.validationErrors) {
          toast.error(<Text string={data.validationErrors} parse={true} />, {
            duration: 6000,
          });
        }
        toast.error(data?.data?.msg, { duration: 6000 });
      }
    });
  };

  return (
    <>
      <main className="logon_main">
        <section className="logon_sec">
          <div className="contain">
            <div className="flex">
              <div className="logon_right">
                <div className="right_inner">
                  <h2>
                    <Text string={'Email Verification'} />
                  </h2>
                  <p>
                    <Text string={"We have sent a verification code to your email. Please enter the six digit code to verify your account"} />
                  </p>
                  <form
                    method="POST"
                    onSubmit={handleSubmit(handleVerifyEmail)}
                  >
                    <div className="form_blk">
                      <Controller
                        name="otp"
                        control={control}
                        rules={{ required: "Verify Code is required" }}
                        render={({ field, fieldState }) => (
                          <OTPInput
                            value={field.value}
                            onChange={field.onChange}
                            numInputs={6}
                            isInputNum
                            inputStyle={{ width: "50px" }}
                            renderSeparator={<span> &nbsp;-&nbsp; </span>}
                            renderInput={(props) => (
                              <input {...props} className="input" />
                            )}
                          />
                        )}
                      />
                      <div
                        className="validation-error"
                        style={{ color: "red" }}
                      >
                        {errors.otp?.message}
                      </div>
                    </div>

                    <div className="btn_blk">
                      <button
                        className="site_btn white"
                        type="button"
                        onClick={resendEmail}
                        disabled={emailVerify}
                      >
                        <Text string={"Re-Send Code"} />
                        {emailVerify && (
                          <i
                            className={
                              emailVerify ? "spinner" : "spinnerHidden"
                            }
                          ></i>
                        )}
                      </button>

                      <button
                        className="site_btn"
                        type="submit"
                        disabled={isFormProcessing}
                      >
                        <Text string={"Verify OTP"} />{" "}
                        {isFormProcessing && (
                          <i
                            className={
                              isFormProcessing ? "spinner" : "spinnerHidden"
                            }
                          ></i>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
             
            </div>
          </div>
        </section>
      </main>
     
    </>
  );
}
