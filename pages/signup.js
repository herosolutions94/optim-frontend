import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import http from "../helpers/http";
import { cmsFileUrl, doObjToFormData } from "../helpers/helpers";
import { parse } from "cookie";
import MetaGenerator from "../components/meta-generator";
import Text from "../components/text";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from "../states/actions/signup";

export const getServerSideProps = async (context) => {
  const { req } = context;
  const cookieHeader = req.headers.cookie || "";
  const cookieValue = parse(cookieHeader);
  const authToken =
    cookieValue["authToken"] !== undefined &&
    cookieValue["authToken"] !== null &&
    cookieValue["authToken"] !== ""
      ? cookieValue["authToken"]
      : null;
  if (authToken !== null) {
    return {
      redirect: {
        destination: "/", // Replace '/dashboard' with the appropriate URL
        permanent: false,
      },
    };
  }
  const result = await http
    .post("signup-page", doObjToFormData({ token: authToken }))
    .then((response) => response.data)
    .catch((error) => error);

  return { props: { result } };
};

export default function Signup({ result }) {
  const { page_title, site_settings, content } = result;

  const dispatch = useDispatch();
  const isFormProcessing = useSelector(
    (state) => state.signup.isFormProcessing
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCreateAccount = (data, e) => {
    e.preventDefault();
    data = { ...data, mem_type: "member" };
    dispatch(createAccount(data));
  };

  const [passView, setPassView] = useState(true);
  const togglePass = () => {
    setPassView(!passView);
  };

  return (
    <>
      <MetaGenerator
        page_title={page_title + " - " + site_settings?.site_name}
        meta_info={content}
      />
      <main className="logon_main">
        <div className="logon_header">
          <div className="logo">
            <Link href="/">
              <img
                src={cmsFileUrl(site_settings?.site_logo)}
                alt={site_settings?.site_name}
              />
            </Link>
          </div>
          <div className="ask_question text-center">
            <p>
              Already have an account? <Link href="/login">Login</Link>
            </p>
          </div>
        </div>
        <section className="logon_sec">
          <div className="inner_left signup_inner_left">
            <div className="inner">
              <Text string={content?.banner_text} />
              <form method="POST" onSubmit={handleSubmit(handleCreateAccount)}>
                <div className="outer_form_blk">
                  <div className="form_blk">
                    <h6>First Name</h6>
                    <input
                      type="text"
                      className="input"
                      placeholder="First name"
                      {...register("fname", {
                        pattern: {
                          value: /^[a-zA-Z][a-zA-Z ]*$/,
                          message: "Invalid Value",
                        },
                        required: "First Name is Required",
                      })}
                    />
                    <div className="validation-error" style={{ color: "red" }}>
                      {errors.fname?.message}
                    </div>
                  </div>
                </div>
                <div className="outer_form_blk">
                  <div className="form_blk">
                    <h6>Last Name</h6>
                    <input
                      type="text"
                      className="input"
                      placeholder="Last name"
                      {...register("lname", {
                        pattern: {
                          value: /^[a-zA-Z][a-zA-Z ]*$/,
                          message: "Invalid Value",
                        },
                        required: "Last Name is Required",
                      })}
                    />
                    <div className="validation-error" style={{ color: "red" }}>
                      {errors.lname?.message}
                    </div>
                  </div>
                </div>

                <div className="outer_form_blk">
                  <div className="form_blk">
                    <h6>Email</h6>
                    <input
                      type="text"
                      className="input"
                      placeholder="hi@example.com"
                      {...register("email", {
                        required: "Email is Required",
                        pattern: {
                          value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
                          message: "Email format is not valid!",
                        },
                      })}
                    />
                    <div className="validation-error" style={{ color: "red" }}>
                      {errors.email?.message}
                    </div>
                  </div>
                </div>
                <div className="outer_form_blk">
                  <div className="form_blk">
                    <h6>Phone</h6>
                    <input
                      type="text"
                      className="input"
                      placeholder="Enter Phone"
                      {...register("phone", {
                        required: "Phone No. is Required",
                      })}
                    />
                    <div className="validation-error" style={{ color: "red" }}>
                      {errors.phone?.message}
                    </div>
                  </div>
                </div>
                <div className="outer_form_blk">
                  <h6>Password</h6>
                  <div className="form_blk pass_blk">
                    <input
                      type={passView ? "text" : "password"}
                      className="input"
                      placeholder="Enter password"
                      {...register("password", {
                        required: "Password is Required",
                        pattern: {
                          value:
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\>\=\?\@\[\]\{\}\\\\\^\_\`\~]{8,}$/,
                          message:
                            "The password should contain at least 8 characters, that contain at least one lowercase letter, one uppercase letter and one numeric digit.",
                        },
                      })}
                    />
                    <i
                      className={passView ? "icon-eye" : "icon-eye-slash"}
                      onClick={togglePass}
                    ></i>
                    
                  </div>
                  <div className="validation-error" style={{ color: "red" }}>
                      {errors.password?.message}
                    </div>
                </div>

                <div className="btn_blk">
                  <button
                    className="site_btn block"
                    type="submit"
                    disabled={isFormProcessing ? true : false}
                  >
                    Submit
                    {isFormProcessing && (
                      <div
                        className="spinner-border text-success"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )}
                  </button>
                </div>
                <div className="ask_question text-center show_cell_cell">
                  <p>
                    Already have an account? <Link href="/login">Login</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="inner_right">
            <div className="image">
              <Image
                src={cmsFileUrl(content?.image1)}
                alt="signup"
                width={700}
                height={1300}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
