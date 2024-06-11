import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import BigCta from "@/components/big-cta";
import Testimonials from "@/components/testimonials";

export default function Home() {
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
    <main>
      <section className="banner">
        <div className="contain">
          <div className="cntnt">
            <h1>Optimize Your Gas Station Pricing with Artificial Intelligence</h1>
            <p>Maximize performance based on your goals with AI automation and detailed price sensitivity reports</p>
            <div className="btn_blk text-center">
              <Link href="/contact" className="site_btn color2">Contact Us</Link>
              <Link href="/signup" className="site_btn color">Get Started</Link>
            </div>
          </div>
          <div className="image">
            <Image src="/images/banner_img.svg" alt="" width={800} height={500} />
          </div>
        </div>
      </section>

      <section className="feature_sec">
        <div className="contain">
          <div className="sec_heading">
            <h2>Our Key Features</h2>
            <p>Leverage our technology and tools to get what you want out of retail fuel pricing, ensuring you remain competitive and maximize profits</p>
          </div>
          <div className="flex">
            <div className="col">
              <div className="inner">
                <div className="head_inner">
                  <div className="img_icon">
                    <Image src="/images/feature1.png" alt="" width={500} height={500} />
                  </div>
                  <h4>Real-Time AI Pricing</h4>
                </div>
                <p>Our real-time AI pricing has been shown to increase volume by up to 10% and gross profit by 20%</p>
              </div>
            </div>

            <div className="col">
              <div className="inner">
                <div className="head_inner">
                  <div className="img_icon">
                    <Image src="/images/feature2.png" alt="" width={500} height={500} />
                  </div>
                  <h4>Customizable Business Goals</h4>
                </div>
                <p>Define your business goals and let our AI tailor its pricing strategies to meet them, whether it's maximizing profit, increasing volume, or balancing both.</p>
              </div>
            </div>

            <div className="col">
              <div className="inner">
                <div className="head_inner">
                  <div className="img_icon">
                    <Image src="/images/feature3.png" alt="" width={500} height={500} />
                  </div>
                  <h4>Advanced Insights</h4>
                </div>
                <p>Get a detailed report analyzing how sensitive your gas station is to competitors' prices, helping you make informed decisions that lead to improved performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sponserd_sec">
        <div className="contain">
          <div className="sec_heading text-center">
            <h2>Trusted by</h2>
          </div>
          <div className="flex">
            <div className="image">
              <Image src="/images/logo1.svg" alt="" width={500} height={500} />
            </div>
            <div className="image">
              <Image src="/images/logo2.svg" alt="" width={500} height={500} />
            </div>
            <div className="image">
              <Image src="/images/logo3.svg" alt="" width={500} height={500} />
            </div>
            <div className="image">
              <Image src="/images/logo4.svg" alt="" width={500} height={500} />
            </div>
            <div className="image">
              <Image src="/images/logo5.svg" alt="" width={500} height={500} />
            </div>
            <div className="image">
              <Image src="/images/logo6.svg" alt="" width={500} height={500} />
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
                      <Image src="/images/choose1.png" alt="" width={500} height={500} />
                    </div>
                    <div className="cntnt">
                      <h4>Increased Performance</h4>
                      <p>Our AI-driven pricing ensures your prices are always optimized for for the best performance.</p>
                    </div>
                  </div>

                  <div className="inner_lst">
                    <div className="img_icon">
                      <Image src="/images/choose2.png" alt="" width={500} height={500} />
                    </div>
                    <div className="cntnt">
                      <h4>Seamless Automation</h4>
                      <p>Set your goals then let our technology do the heavy lifting, easing the pressure of making all of the pricing decisions</p>
                    </div>
                  </div>

                  <div className="inner_lst">
                    <div className="img_icon">
                      <Image src="/images/choose3.png" alt="" width={500} height={500} />
                    </div>
                    <div className="cntnt">
                      <h4>Data-Driven Insights</h4>
                      <p>Stay informed with market trends, site-level data, and key performance indicators</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="colR">
              <div className="sec_heading">
                <h2>Why Choose Our Solutions?</h2>
              </div>
              <p>Leverage our AI technology to dynamically adjust your gas station prices in real-time, ensuring you remain competitive and maximize performance.</p>
              <div className="btn_blk">
                <Link href="/about" className="site_btn">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product_sec">
        <div className="contain">
          <div className="cntnt text-center">
            <h2>Our Products</h2>
            <p>Sign up for our SaaS solution to automate your pricing the process or get a one-off report that gives you the power to price with advanced precision.</p>
          </div>
          <div className="flex">
            <div className="col">
              <div className="inner">
                <h4>Real-Time AI Pricing</h4>
                <p>Our SaaS solution for seamless automation and unmatched precision.</p>
                <Link href=""><span>Read More</span><Image src="/images/ArrowRight.png" alt="" width={500} height={500} /></Link>
                <div className="image">
                  <Image src="/images/product1.png" alt="Real-Time AI Pricing" width={700} height={500}/>
                </div>
              </div>
            </div>
            
            <div className="col">
              <div className="inner">
                <h4>Price Sensitivity Report</h4>
                <p>With this report you will know exactly what each pricing strategy will produce for your business.</p>
                <Link href=""><span>Read More</span><Image src="/images/ArrowRightcolor.png" alt="" width={500} height={500} /></Link>
                <div className="image">
                  <Image src="/images/product2.png" alt="Price Sensitivity Report" width={700} height={500}/>
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
              <h2>What Our Clients Say</h2>
              <p>Our customers say Excellent</p>
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
