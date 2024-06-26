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
        destination: "/dashboard", // Replace '/dashboard' with the appropriate URL
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
              <form method="POST">
                <div className="outer_form_blk">
                  <div className="form_blk">
                    <h6>First Name</h6>
                    <input
                      type="text"
                      className="input"
                      placeholder="First name"
                    />
                  </div>
                </div>
                <div className="outer_form_blk">
                  <div className="form_blk">
                    <h6>Last Name</h6>
                    <input
                      type="text"
                      className="input"
                      placeholder="Last name"
                    />
                  </div>
                </div>

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
                  <div className="form_blk">
                    <h6>Phone</h6>
                    <input
                      type="text"
                      className="input"
                      placeholder="Enter Phone"
                    />
                  </div>
                </div>
                <div className="outer_form_blk">
                  <div className="form_blk">
                    <h6>Address</h6>
                    <input
                      type="text"
                      className="input"
                      placeholder="Enter Address"
                    />
                  </div>
                </div>
                <div className="btn_blk">
                  <button className="site_btn block" type="submit">
                    Submit
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
