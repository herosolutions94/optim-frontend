import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import BigCta from "@/components/big-cta";
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
    .post("price-report-page", doObjToFormData({ token: authToken }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function PriceSensitivityReport({ result }) {
  const { page_title, site_settings, content } = result;
  return (
    <>
      <MetaGenerator
        page_title={page_title + " - " + site_settings?.site_name}
        meta_info={content}
      />
      <main>
        <section className="pro_grid p_t_4">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <h1>
                  <Text string={content?.banner_title} />
                </h1>
                <p>
                  <Text string={content?.banner_text} />
                </p>
              </div>
              <div className="colR">
                <div className="image">
                  <Image
                    src={cmsFileUrl(content?.image1)}
                    alt="report"
                    width={700}
                    height={700}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="values_sec_pro">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="inner">
                  <div className="inner_col">
                    <div className="img_icon">
                      <Image
                        src={cmsFileUrl(content?.image2)}
                        alt="pro_f1"
                        width={200}
                        height={200}
                      />
                    </div>
                    <h4>
                      <Text string={content?.sec1_heading2} />
                    </h4>
                    <p>
                      <Text string={content?.sec1_text2} />
                    </p>
                  </div>
                </div>
                <div className="inner">
                  <div className="inner_col">
                    <div className="img_icon">
                      <Image
                        src={cmsFileUrl(content?.image3)}
                        alt="pro_f2"
                        width={200}
                        height={200}
                      />
                    </div>
                    <h4>
                      <Text string={content?.sec1_heading3} />
                    </h4>
                    <p>
                      <Text string={content?.sec1_text3} />
                    </p>
                  </div>
                </div>
                <div className="inner">
                  <div className="inner_col">
                    <div className="img_icon">
                      <Image
                        src={cmsFileUrl(content?.image4)}
                        alt="pro_f3"
                        width={200}
                        height={200}
                      />
                    </div>
                    <h4>
                      <Text string={content?.sec1_heading4} />
                    </h4>
                    <p>
                      <Text string={content?.sec1_text4} />
                    </p>
                  </div>
                </div>
                <div className="inner">
                  <div className="inner_col">
                    <div className="img_icon">
                      <Image
                        src={cmsFileUrl(content?.image5)}
                        alt="pro_f4"
                        width={200}
                        height={200}
                      />
                    </div>
                    <h4>
                      <Text string={content?.sec1_heading5} />
                    </h4>
                    <p>
                      <Text string={content?.sec1_text5} />
                    </p>
                  </div>
                </div>
              </div>
              <div className="colR">
                <div className="sec_heading">
                  <h2>
                    {" "}
                    <Text string={content?.section1_heading} />
                  </h2>
                </div>
                <p>
                  <Text string={content?.section1_text} />
                </p>
                <div className="btn_blk">
                  <Link href={content?.section1_btn_link} className="site_btn">
                    <Text string={content?.section1_btn_text} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="how_it_works_product_sec">
          <div className="contain">
            <div className="flex">
              <div className="col self_center">
                <h2>
                  <Text string={content?.section2_heading} />
                </h2>
                <p>
                  <Text string={content?.section2_text} />
                </p>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="img_icon">
                    <Image
                      src={cmsFileUrl(content?.image6)}
                      alt="pro_icon1"
                      width={200}
                      height={200}
                    />
                  </div>
                  <h4>
                    <Text string={content?.sec4_heading6} />
                  </h4>
                  <p>
                    <Text string={content?.sec4_text6} />
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="img_icon">
                    <Image
                      src={cmsFileUrl(content?.image7)}
                      alt="pro_icon7"
                      width={200}
                      height={200}
                    />
                  </div>
                  <h4>
                    <Text string={content?.sec4_heading7} />
                  </h4>
                  <p>
                    <Text string={content?.sec4_text7} />
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="img_icon">
                    <Image
                      src={cmsFileUrl(content?.image8)}
                      alt="pro_icon8"
                      width={200}
                      height={200}
                    />
                  </div>
                  <h4>
                    <Text string={content?.sec4_heading8} />
                  </h4>
                  <p>
                    <Text string={content?.sec4_text8} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BigCta
          heading={content?.section3_heading}
          paragraph={content?.section3_text}
          btn1_text={content?.section3_btn_text_1}
          btn1_url={content?.section3_btn_link_1}
          btn2_text={content?.section3_btn_text_2}
          btn2_url={content?.section3_btn_link_2}
        />
        <section className="benefits_pro_two">
          <div className="contain">
            <div className="cntnt text-center">
              <h2>
                <Text string={content?.section4_heading} />
              </h2>
              <p>
                <Text string={content?.section4_text} />
              </p>
            </div>
            <div className="flex">
              <div className="col">
                <h4>
                  <Text string={content?.sec4_heading1} />
                </h4>
                <p>
                  <Text string={content?.sec4_text1} />
                </p>
              </div>
              <div className="col">
                <h4>
                  {" "}
                  <Text string={content?.sec4_heading2} />
                </h4>
                <p>
                  <Text string={content?.sec4_text2} />
                </p>
              </div>
              <div className="col">
                <h4>
                  {" "}
                  <Text string={content?.sec4_heading3} />
                </h4>
                <p>
                  <Text string={content?.sec4_text3} />
                </p>
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
