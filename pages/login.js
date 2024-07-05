import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import http from "../helpers/http";
import { cmsFileUrl, doObjToFormData } from "../helpers/helpers";
import { parse } from "cookie";
import MetaGenerator from "../components/meta-generator";
import Text from "../components/text";

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
    .post("login-page", doObjToFormData({ token: authToken }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Login({ result }) {
  const { page_title, site_settings, content } = result;

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
              Don’t have an account?{" "}
              <Link href="signup">Get started today</Link>
            </p>
          </div>
        </div>
        <section className="logon_sec">
          <div className="inner_left">
            <div className="inner">
              <Text string={content?.banner_text} />
              <form method="POST">
                <div className="outer_form_blk">
                  <div className="form_blk">
                    <h6>Email</h6>
                    <input
                      type="text"
                      className="input"
                      placeholder="hi@example.com"
                    />
                  </div>
                </div>
                <div className="outer_form_blk">
                  <h6>Password</h6>
                  <div className="form_blk pass_blk">
                    <input
                      type={passView ? "text" : "password"}
                      className="input"
                      placeholder="Enter password"
                    />
                    <i
                      className={passView ? "icon-eye" : "icon-eye-slash"}
                      onClick={togglePass}
                    ></i>
                  </div>
                </div>
                <div className="have_check">
                  <Link href="/forgot-password">Forgot Password?</Link>
                </div>
                <div className="btn_blk">
                  <button className="site_btn block" type="submit">
                    Login
                  </button>
                  {/* <Link href="" className="site_btn block blank">
                    <img src="/images/google.svg" alt="Continue with Google" />
                    <span>Continue with Google</span>
                  </Link> */}
                </div>
                <div className="ask_question text-center show_cell_cell">
                  <p>
                    Don’t have an account?{" "}
                    <Link href="signup">Get started today</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="inner_right">
            <div className="image">
              <Image
                src={cmsFileUrl(content?.image1)}
                alt="login"
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
