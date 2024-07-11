import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Cta from "@/components/cta";
import Text from "../components/text";
import http from "../helpers/http";
import { cmsFileUrl, doObjToFormData } from "../helpers/helpers";
import MetaGenerator from "../components/meta-generator";
import { parse } from "cookie";

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
    .post("about-page", doObjToFormData({ token: authToken }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function About({ result }) {
  const { page_title, site_settings, content } = result;
  return (
    <>
      <MetaGenerator
        page_title={page_title + " - " + site_settings?.site_name}
        meta_info={content}
      />
      <main>
        <section className="about_banner">
          <div
            className="contain"
            style={{ backgroundImage: `url(${cmsFileUrl(content?.image1)})` }}
          >
            <div className="cntnt">
              <div className="sec_heading">
                <h1>
                  <Text string={content?.banner_title} />
                </h1>
                <p>
                  <Text string={content?.banner_text} />
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mission_vision_sec">
          <div className="contain">
            <div className="sec_heading">
              <h2>
                <Text string={content?.section1_heading} />
              </h2>
              <p>
                <Text string={content?.section1_text} />
              </p>
            </div>
            <div className="flex">
              <div className="col">
                <div className="inner">
                  <p>
                    <Text string={content?.section1_left_text} />
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <p>
                    <Text string={content?.section1_right_text} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="stroy_sec">
          <div className="contain">
            <div className="sec_heading">
              <h2>
                <Text string={content?.section2_heading} />
              </h2>
              <p>
                <Text string={content?.section2_text} />
              </p>
            </div>
            <div className="flex">
              <div className="colL">
                <Text string={content?.section2_details} />
              </div>
              <div className="colR">
                <div className="image">
                  <Image
                    src={cmsFileUrl(content?.image2)}
                    alt="story"
                    width={700}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="values_sec">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="inner">
                  <div className="inner_col">
                    <div className="img_icon">
                      <Image
                        src={cmsFileUrl(content?.image3)}
                        alt="value1"
                        width={200}
                        height={200}
                      />
                    </div>
                    <h4>
                      <Text string={content?.sec3_heading3} />
                    </h4>
                    <p>
                      <Text string={content?.sec3_text3} />
                    </p>
                  </div>
                </div>
                <div className="inner">
                  <div className="inner_col">
                    <div className="img_icon">
                      <Image
                        src={cmsFileUrl(content?.image4)}
                        alt="value2"
                        width={200}
                        height={200}
                      />
                    </div>
                    <h4>
                      <Text string={content?.sec3_heading4} />
                    </h4>
                    <p>
                      <Text string={content?.sec3_text4} />
                    </p>
                  </div>
                </div>
                <div className="inner">
                  <div className="inner_col">
                    <div className="img_icon">
                      <Image
                        src={cmsFileUrl(content?.image5)}
                        alt="value3"
                        width={200}
                        height={200}
                      />
                    </div>
                    <h4>
                      <Text string={content?.sec3_heading5} />
                    </h4>
                    <p>
                      <Text string={content?.sec3_text5} />
                    </p>
                  </div>
                </div>
                <div className="inner">
                  <div className="inner_col">
                    <div className="img_icon">
                      <Image
                        src={cmsFileUrl(content?.image6)}
                        alt="value4"
                        width={200}
                        height={200}
                      />
                    </div>
                    <h4>
                      <Text string={content?.sec3_heading6} />
                    </h4>
                    <p>
                      <Text string={content?.sec3_text6} />
                    </p>
                  </div>
                </div>
              </div>
              <div className="colR">
                <div className="sec_heading">
                  <h2>
                    <Text string={content?.section3_heading} />
                  </h2>
                </div>
                <p>
                  <Text string={content?.section3_text} />
                </p>
                <div className="btn_blk">
                  <Link href={content?.section3_btn_link} className="site_btn">
                    <Text string={content?.section3_btn_text} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta_sec">
          <div className="contain">
            <Cta
              heading={content?.signup_heading}
              paragraph={content?.signup_text}
              btn1_text={content?.signup_btn_text}
              btn1_url={content?.signup_btn_link}
            />
          </div>
        </section>
      </main>
    </>
  );
}
