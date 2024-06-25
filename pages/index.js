import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import BigCta from "@/components/big-cta";
import Testimonials from "@/components/testimonials";
import http from "../helpers/http";
import { doObjToFormData } from "../helpers/helpers";
import { parse } from "cookie";
import MetaGenerator from "../components/meta-generator";
import Text from "../components/text";
import { cmsFileUrl } from "../helpers/helpers";
import { NULL } from "sass";

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
    .post("home-page", doObjToFormData({ token: authToken }))
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Home({ result }) {
  // console.log(result);

  const { page_title, site_settings, content, brands, testimonials } = result;

  const data = [
    {
      id: 1,
      image: "/images/quote.svg",
      comment:
        "People now recognise that having a good performance conversation means that something happens as a result. With Landingfolio, the design team can now build design which identifies employees’ career aspirations and goals and from which we approach managers and check to see what is happening.",
      name: "Vicki and Stacy Oliver",
      designation: "Founders of V&S Enterprises",
    },
    {
      id: 2,
      image: "/images/quote.svg",
      comment:
        "People now recognise that having a good performance conversation means that something happens as a result. With Landingfolio, the design team can now build design which identifies employees’ career aspirations and goals and from which we approach managers and check to see what is happening.",
      name: "Albert Flores",
      designation: "Product Manager at Jomanar",
    },
    {
      id: 3,
      image: "/images/quote.svg",
      comment:
        "People now recognise that having a good performance conversation means that something happens as a result. With Landingfolio, the design team can now build design which identifies employees’ career aspirations and goals and from which we approach managers and check to see what is happening.",
      name: "Vicki and Stacy Oliver",
      designation: "Founders of V&S Enterprises",
    },
    {
      id: 4,
      image: "/images/quote.svg",
      comment:
        "People now recognise that having a good performance conversation means that something happens as a result. With Landingfolio, the design team can now build design which identifies employees’ career aspirations and goals and from which we approach managers and check to see what is happening.",
      name: "Albert Flores",
      designation: "Product Manager at Jomanar",
    },
    {
      id: 5,
      image: "/images/quote.svg",
      comment:
        "People now recognise that having a good performance conversation means that something happens as a result. With Landingfolio, the design team can now build design which identifies employees’ career aspirations and goals and from which we approach managers and check to see what is happening.",
      name: "Vicki and Stacy Oliver",
      designation: "Founders of V&S Enterprises",
    },
    {
      id: 6,
      image: "/images/quote.svg",
      comment:
        "People now recognise that having a good performance conversation means that something happens as a result. With Landingfolio, the design team can now build design which identifies employees’ career aspirations and goals and from which we approach managers and check to see what is happening.",
      name: "Albert Flores",
      designation: "Product Manager at Jomanar",
    },
  ];
  return (
    <>
      <MetaGenerator
        page_title={page_title + " - " + site_settings?.site_name}
      />
      <main>
        <section className="banner">
          <div className="contain">
            <div className="cntnt">
              <h1>
                <Text string={content?.banner_heading} />
              </h1>
              <Text string={content?.banner_text} />
              <div className="btn_blk text-center">
                <Link
                  href={content?.banner_link1_url}
                  className="site_btn color2"
                >
                  <Text string={content?.banner_link1_text} />
                </Link>
                <Link
                  href={content?.banner_link2_url}
                  className="site_btn color"
                >
                  <Text string={content?.banner_link2_text} />
                </Link>
              </div>
            </div>
            <div className="image">
              <Image
                src={cmsFileUrl(content?.image1)}
                alt="image1"
                width={800}
                height={500}
              />
            </div>
          </div>
        </section>

        <section className="feature_sec">
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
                  <div className="head_inner">
                    <div className="img_icon">
                      <Image
                        src={cmsFileUrl(content?.image2)}
                        alt="image2"
                        width={500}
                        height={500}
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
                  <div className="head_inner">
                    <div className="img_icon">
                      <Image
                        src={cmsFileUrl(content?.image3)}
                        alt="image3"
                        width={500}
                        height={500}
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
                  <div className="head_inner">
                    <div className="img_icon">
                      <Image
                        src={cmsFileUrl(content?.image4)}
                        alt="image4"
                        width={500}
                        height={500}
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
            </div>
          </div>
        </section>

        <section className="sponserd_sec">
          <div className="contain">
            <div className="sec_heading text-center">
              <h2>
                <Text string={content?.section2_text} />
              </h2>
            </div>
            <div className="flex">
              <div className="image">
                <Image
                  src="/images/logo1.svg"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="image">
                <Image
                  src="/images/logo2.svg"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="image">
                <Image
                  src="/images/logo3.svg"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="image">
                <Image
                  src="/images/logo4.svg"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="image">
                <Image
                  src="/images/logo5.svg"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="image">
                <Image
                  src="/images/logo6.svg"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="why_choose_sec">
          <div className="contain">
            <div className="flex">
              <div className="colL">
                <div className="inner">
                  <div className="lst">
                    <div className="inner_lst">
                      <div className="img_icon">
                        <Image
                          src={cmsFileUrl(content?.image5)}
                          alt="image5"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="cntnt">
                        <h4>
                          <Text string={content?.sec3_heading5} />
                        </h4>
                        <p>
                          <Text string={content?.sec3_text5} />
                        </p>
                      </div>
                    </div>

                    <div className="inner_lst">
                      <div className="img_icon">
                        <Image
                          src={cmsFileUrl(content?.image6)}
                          alt="image6"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="cntnt">
                        <h4>
                          <Text string={content?.sec3_heading6} />
                        </h4>
                        <p>
                          <Text string={content?.sec3_text6} />
                        </p>
                      </div>
                    </div>

                    <div className="inner_lst">
                      <div className="img_icon">
                        <Image
                          src={cmsFileUrl(content?.image7)}
                          alt="image7"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="cntnt">
                        <h4>
                          <Text string={content?.sec3_heading7} />
                        </h4>
                        <p>
                          <Text string={content?.sec3_text7} />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="colR">
                <div className="sec_heading">
                  <h2>
                    {" "}
                    <Text string={content?.section3_heading} />
                  </h2>
                </div>

                <Text string={content?.section3_text} />

                <div className="btn_blk">
                  <Link href={content?.section3_link_url} className="site_btn">
                    <Text string={content?.section3_link_text} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product_sec">
          <div className="contain">
            <div className="cntnt text-center">
              <h2>
                <Text string={content?.section4_heading} />
              </h2>
              <Text string={content?.section4_text} />
            </div>
            <div className="flex">
              <div className="col">
                <div className="inner">
                  <h4>
                    <Text string={content?.sec4_heading8} />
                  </h4>
                  <p>
                    <Text string={content?.sec4_text8} />
                  </p>
                  <Link href={content?.sec4_link_url8}>
                    <span>
                      <Text string={content?.sec4_link_txt8} />
                    </span>
                    <Image
                      src="/images/ArrowRight.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </Link>
                  <div className="image">
                    <Image
                      src={cmsFileUrl(content?.image8)}
                      alt="image8"
                      width={700}
                      height={500}
                    />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="inner">
                  <h4>
                    <Text string={content?.sec4_heading9} />
                  </h4>
                  <p>
                    <Text string={content?.sec4_text9} />
                  </p>
                  <Link href={content?.sec4_link_url9}>
                    <span>
                      <Text string={content?.sec4_link_txt9} />
                    </span>
                    <Image
                      src="/images/ArrowRightcolor.png"
                      alt=""
                      width={500}
                      height={500}
                    />
                  </Link>
                  <div className="image">
                    <Image
                      src={cmsFileUrl(content?.image9)}
                      alt="image9"
                      width={700}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <BigCta />
        <section className="testimonials">
          <div className="contain">
            <div className="sec_heading">
              <h2>
                <Text string={content?.sec6_heading} />
              </h2>
              <Text string={content?.section6_text} />
            </div>
            <div className="slick-carousel">
              <Testimonials data={data} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
