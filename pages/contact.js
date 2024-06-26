import React, { useState, useEffect, useRef } from "react";
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
  const result = await http
    .post("contact-page", doObjToFormData({ token: authToken }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Contact({ result }) {
  const { page_title, site_settings, content } = result;

  return (
    <>
      <MetaGenerator
        page_title={page_title + " - " + site_settings?.site_name}
        meta_info={content}
      />

      <main>
        <section className="contact_pg">
          <div className="contain">
            <div className="cntnt">
              <div className="sec_heading">
                <h1>
                  <Text string={content?.section1_heading} />
                </h1>
                <Text string={content?.section1_text} />
              </div>
            </div>
            <div className="flex">
              <div className="colL">
                <form>
                  <div className="row form_row">
                    <div className="col-6">
                      <div className="txt_blk">
                        <input
                          type="text"
                          name="fname"
                          className="input"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="txt_blk">
                        <input
                          type="text"
                          name="lname"
                          className="input"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="txt_blk">
                        <input
                          type="text"
                          name="email"
                          className="input"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="txt_blk">
                        <input
                          type="text"
                          className="input"
                          name="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="txt_blk">
                        <input
                          type="text"
                          className="input"
                          name="cname"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="txt_blk">
                        <input
                          type="text"
                          className="input"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="txt_blk">
                        <textarea
                          name="message"
                          className="input"
                          placeholder="Write your message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="btn_blk text-center">
                    <button className="site_btn">Submit</button>
                  </div>
                </form>
              </div>
              <div className="colR">
                <h4>
                  <Text string={content?.section2_text} />
                </h4>
                <ul>
                  {site_settings?.site_email ? (
                    <li>
                      <Link href={"mailto:" + site_settings?.site_email}>
                        <Image
                          src="/images/envelope.svg"
                          alt={site_settings?.site_email}
                          width={200}
                          height={200}
                        />
                        <span>{site_settings?.site_email}</span>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {site_settings?.site_phone ? (
                    <li>
                      <Link href={"tel:" + site_settings?.site_phone}>
                        <Image
                          src="/images/phone.svg"
                          alt={site_settings?.site_phone}
                          width={200}
                          height={200}
                        />
                        <span>{site_settings?.site_phone}</span>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {site_settings?.site_address ? (
                    <li>
                      <p>
                        <Image
                          src="/images/map.svg"
                          alt={site_settings?.site_address}
                          width={200}
                          height={200}
                        />
                        <span>{site_settings?.site_address}</span>
                      </p>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
                <div className="social_logon">
                  {site_settings?.site_facebook ? (
                    <Link
                      href={site_settings?.site_facebook}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/images/facebook.svg" alt="facebook" />
                    </Link>
                  ) : (
                    ""
                  )}
                  {site_settings?.site_twitter ? (
                    <Link
                      href={site_settings?.site_twitter}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/images/twitter.svg" alt="twitter" />
                    </Link>
                  ) : (
                    ""
                  )}
                  {site_settings?.site_instagram ? (
                    <Link
                      href={site_settings?.site_instagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/images/instagram.svg" alt="instagram" />
                    </Link>
                  ) : (
                    ""
                  )}
                  {site_settings?.site_discord ? (
                    <Link
                      href={site_settings?.site_discord}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/images/linkedin.svg" alt="linkedin" />
                    </Link>
                  ) : (
                    ""
                  )}
                  {site_settings?.site_pinterest ? (
                    <Link
                      href={site_settings?.site_pinterest}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/images/pintrest.svg" alt="pintrest" />
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
