import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Cta from "@/components/cta";
import http from "../helpers/http";
import { doObjToFormData } from "../helpers/helpers";
import { parse } from "cookie";
import MetaGenerator from "../components/meta-generator";
import Text from "../components/text";
import { cmsFileUrl } from "../helpers/helpers";

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
    .post("pricing-page", doObjToFormData({ token: authToken }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Pricing({ result }) {
  const { page_title, site_settings, content, plans } = result;

  return (
    <>
      <MetaGenerator
        page_title={page_title + " - " + site_settings?.site_name}
        meta_info={content}
      />
      <main>
        <section className="pricing_banner">
          <div className="contain">
            <div className="cntnt">
              <h1>
                <Text string={content?.banner_heading} />
              </h1>
              <Text string={content?.banner_text} />
            </div>
            <div className="flex">
              {plans?.map((val) => {
                return (
                  <div className="col" key={val?.id}>
                    <div className="inner">
                      <div className="top_lbl">
                        <Text string={val?.plan_type} />
                      </div>
                      <div className="price_bdy">
                        <h4>
                          <Text string={val?.name} />
                        </h4>
                        <Text string={val?.txt1} />
                        <div className="mini_br"></div>
                        <Text string={val?.txt2} />
                      </div>
                      <div className="btn_blk">
                        <Link
                          href={`/contact?plan=${val?.id}`}
                          className="site_btn color"
                        >
                          Request Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="report_sec">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="sec_heading">
                  <h2>
                    <Text string={content?.section1_heading1} />
                  </h2>
                </div>
                <Text string={content?.section1_txt1} />
              </div>
              <div className="colR">
                <div className="inner">
                  <h1>
                    <Text string={content?.section1_side_br_price} />{" "}
                    <sub>
                      /<Text string={content?.section1_side_br_price_sub} />
                    </sub>
                  </h1>
                  <Text string={content?.section1_txt2} />
                  <div className="btn_blk">
                    <Link
                      href={content?.sec1_link_url}
                      className="site_btn color"
                    >
                      <Text string={content?.sec1_link_text} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="solutions_sec">
          <div className="contain">
            <div className="sec_heading text-center">
              <h2>
                <Text string={content?.section2_heading} />
              </h2>
              <Text string={content?.section2_txt1} />
            </div>
            <div className="flex">
              <div className="colL">
                <div className="image">
                  <Image
                    src={cmsFileUrl(content?.image1)}
                    alt="image1"
                    width={700}
                    height={500}
                  />
                </div>
              </div>
              <div className="colR">
                <Text string={content?.section2_txt2} />
              </div>
            </div>
            <div className="btn_blk text-center">
              <Link href={content?.sec2_link_url} className="site_btn color">
                <Text string={content?.sec2_link_text} />
              </Link>
            </div>
          </div>
        </section>
        <section className="cta_sec">
          <div className="contain">
            <Cta
              heading={content?.section3_heading}
              paragraph={content?.section3_txt}
              btn1_text={content?.sec3_link_text}
              btn1_url={content?.sec3_link_url}
            />
          </div>
        </section>
      </main>
    </>
  );
}
