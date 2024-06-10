import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import BigCta from "@/components/big-cta";

export default function RealTimeAIPricing() {
  return (
    <>
    <main>
      <section className="product_one_banner">
        <div className="contain">
            <div className="flex">
                <div className="colL">
                    <h1>AI-Powered Gas Station Pricing</h1>
                    <p>Optimize your gas station's pricing strategy in real-time with our advanced AI-driven SaaS solution. Tailored to meet your business goals, our software ensures you stay competitive and maximize profitability seamlessly.</p>
                </div>
                <div className="colR">
                    <div className="image">
                        <Image src="/images/product_pg1.png" alt="" width={500} height={500} />
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="feature_product">
        <div className="contain">
            <div className="cntnt">
                <h2>Our Key Features</h2>
                <p>Leverage our AI technology to dynamically adjust your gas station prices in real-time, ensuring you remain competitive and maximize profits.</p>
            </div>
            <div className="flex">
                <div className="col">
                    <div className="inner">
                        <div className="heading_feature">
                            <div className="img_icon">
                                <Image src="/images/ico1.png" alt="" width={400} height={400} />
                            </div>
                            <h4>Real-Time AI Pricing</h4>
                        </div>
                        <p>Leverage our AI technology to dynamically adjust your gas station prices in real-time, ensuring you remain competitive and maximize profits.</p>
                    </div>
                </div>

                <div className="col">
                    <div className="inner">
                        <div className="heading_feature">
                            <div className="img_icon">
                                <Image src="/images/ico2.png" alt="" width={400} height={400} />
                            </div>
                            <h4>Customizable Business Goals</h4>
                        </div>
                        <p>Define your business goals and let our AI tailor its pricing strategies to meet them, whether it's maximizing profit, increasing market share, or balancing both.</p>
                    </div>
                </div>

                <div className="col">
                    <div className="inner">
                        <div className="heading_feature">
                            <div className="img_icon">
                                <Image src="/images/ico3.png" alt="" width={400} height={400} />
                            </div>
                            <h4>Seamless Automation</h4>
                        </div>
                        <p>Get a detailed report analyzing how sensitive your gas station is to competitors' prices, helping you make informed decisions.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="inner">
                        <div className="heading_feature">
                            <div className="img_icon">
                                <Image src="/images/ico4.png" alt="" width={400} height={400} />
                            </div>
                            <h4>Advanced Insights</h4>
                        </div>
                        <p>Gain valuable insights from comprehensive data analysis to make informed decisions and stay ahead of the competition.</p>
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
                        <Image src="/images/benefits.png" alt="" width={500} height={500} />
                    </div>
                </div>
                <div className="colR">
                    <h2>Benefits</h2>
                    <ul>
                        <li>Shown to increase gross profit by up to as much as 20%</li>
                        <li>Stay competitive by responding to market changes in real-time.</li>
                        <li>Save time and resources with automated pricing strategies.</li>
                        <li>Enhance decision-making with actionable data insights.</li>
                    </ul>
                    <div className="btn_blk">
                        <Link href="" className="site_btn">Get Started Today</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <BigCta />
    </main>
    </>
);
}
