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
    .post("real-time-page", doObjToFormData({ token: authToken }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function RealTimeAIPricing({ result }) {
  const { page_title, site_settings, content } = result;
  return (
    <>
      <MetaGenerator
        page_title={page_title + " - " + site_settings?.site_name}
        meta_info={content}
      />
      <main>
        <section className="product_one_banner">
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
                    alt="product_pg1"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature_product">
          <div className="contain">
            <div className="cntnt">
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
                  <div className="heading_feature">
                    <div className="img_icon">
                      <Image
                        src={cmsFileUrl(content?.image2)}
                        alt="icon1"
                        width={400}
                        height={400}
                      />
                    </div>
                    <h4>
                      <Text string={content?.sec1_heading2} />
                    </h4>
                  </div>
                  <p>
                    <Text string={content?.sec1_text2} />
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="inner">
                  <div className="heading_feature">
                    <div className="img_icon">
                      <Image
                        src={cmsFileUrl(content?.image3)}
                        alt="icon2"
                        width={400}
                        height={400}
                      />
                    </div>
                    <h4>
                      <Text string={content?.sec1_heading3} />
                    </h4>
                  </div>
                  <p>
                    <Text string={content?.sec1_text3} />
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="inner">
                  <div className="heading_feature">
                    <div className="img_icon">
                      <Image
                        src={cmsFileUrl(content?.image4)}
                        alt="icon3"
                        width={400}
                        height={400}
                      />
                    </div>
                    <h4>
                      <Text string={content?.sec1_heading4} />
                    </h4>
                  </div>
                  <p>
                    <Text string={content?.sec1_text4} />
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="heading_feature">
                    <div className="img_icon">
                      <Image
                        src={cmsFileUrl(content?.image5)}
                        alt="icon4"
                        width={400}
                        height={400}
                      />
                    </div>
                    <h4>
                      <Text string={content?.sec1_heading5} />
                    </h4>
                  </div>
                  <p>
                    <Text string={content?.sec1_text5} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="benefits_sec">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="image">
                  <Image
                    src={cmsFileUrl(content?.image6)}
                    alt="benefits"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className="colR">
                <h2>
                  <Text string={content?.section2_heading} />
                </h2>
                <Text string={content?.section2_text} />
                <div className="btn_blk">
                  <Link href={content?.section2_btn_link} className="site_btn">
                    <Text string={content?.section2_btn_text} />
                  </Link>
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
        <section className="how_it_works_product_sec">
          <div className="contain">
            <div className="cntnt">
              <h2>
                <Text string={content?.section4_heading} />
              </h2>
              <p>
                <Text string={content?.section4_text} />
              </p>
            </div>
            <div className="flex">
              <div className="col">
                <div className="inner">
                  <div className="img_icon">
                    <Image
                      src={cmsFileUrl(content?.image7)}
                      alt="pro_icon1"
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
                      alt="pro_icon2"
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
              <div className="col">
                <div className="inner">
                  <div className="img_icon">
                    <Image
                      src={cmsFileUrl(content?.image9)}
                      alt="pro_icon3"
                      width={200}
                      height={200}
                    />
                  </div>
                  <h4>
                    <Text string={content?.sec4_heading9} />
                  </h4>
                  <p>
                    <Text string={content?.sec4_text9} />
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <div className="img_icon">
                    <Image
                      src={cmsFileUrl(content?.image10)}
                      alt="pro_icon4"
                      width={200}
                      height={200}
                    />
                  </div>
                  <h4>
                    <Text string={content?.sec4_heading10} />
                  </h4>
                  <p>
                    <Text string={content?.sec4_text10} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="use_case_pro">
          <div className="contain">
            <div className="cntnt text-center">
              <h2>
                <Text string={content?.section5_heading} />
              </h2>
              <p>
                <Text string={content?.section5_text} />
              </p>
            </div>
            <div className="flex">
              <div className="col">
                <h4>
                  <Text string={content?.sec5_heading1} />
                </h4>
                <p>
                  <Text string={content?.sec5_text1} />
                </p>
              </div>
              <div className="col">
                <h4>
                  <Text string={content?.sec5_heading2} />
                </h4>
                <p>
                  <Text string={content?.sec5_text2} />
                </p>
              </div>
              <div className="col">
                <h4>
                  <Text string={content?.sec5_heading3} />
                </h4>
                <p>
                  <Text string={content?.sec5_text3} />
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="pro_grid">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <h2>
                  <Text string={content?.section6_heading} />
                </h2>
                <p>
                  <Text string={content?.section6_text} />
                </p>
                <Text string={content?.section6_features} />
                <div className="btn_blk">
                  <Link href={content?.section6_btn_link} className="site_btn">
                    <Text string={content?.section6_btn_text} />
                  </Link>
                </div>
              </div>
              <div className="colR">
                <div className="image">
                  <Image
                    src={cmsFileUrl(content?.image11)}
                    alt="progrid"
                    width={700}
                    height={700}
                  />
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
