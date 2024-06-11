import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import BigCta from "@/components/big-cta";
import Cta from "@/components/cta";

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
      <section className="how_it_works_product_sec">
        <div className="contain">
            <div className="cntnt">
                <h2>How It Works</h2>
                <p>Our AI-powered pricing tool operates by continuously analyzing market data and adjusting prices based on predefined business goals. The system integrates seamlessly with your existing infrastructure, providing real-time updates and insights to help you stay competitive.</p>
            </div>
            <div className="flex">
                <div className="col">
                    <div className="inner">
                        <div className="img_icon">
                            <Image src="/images/pro_icon1.png" alt="" width={200} height={200} />
                        </div>
                        <h4>Data Collection</h4>
                        <p>The AI collects and analyzes market data from various sources.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="inner">
                        <div className="img_icon">
                            <Image src="/images/pro_icon2.png" alt="" width={200} height={200} />
                        </div>
                        <h4>Goal Setting</h4>
                        <p>You define your business goals and objectives.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="inner">
                        <div className="img_icon">
                            <Image src="/images/pro_icon3.png" alt="" width={200} height={200} />
                        </div>
                        <h4>Real-Time Adjustments</h4>
                        <p>The AI adjusts prices in real-time to align with your goals.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="inner">
                        <div className="img_icon">
                            <Image src="/images/pro_icon4.png" alt="" width={200} height={200} />
                        </div>
                        <h4>Performance Monitoring</h4>
                        <p>Monitor and review the performance through our user-friendly dashboard.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="use_case_pro">
        <div className="contain">
            <div className="cntnt text-center">
                <h2>Use Cases</h2>
                <p>Our AI-powered pricing tool operates by continuously analyzing market data and adjusting prices based on predefined business goals.</p>
            </div>
            <div className="flex">
                <div className="col">
                    <h4>Decrease Overhead</h4>
                    <p>In highly competitive areas, our AI ensures your prices remain attractive and competitive.</p>
                </div>
                <div className="col">
                    <h4>Increase Profit & Volume</h4>
                    <p>Launch and manage promotional pricing strategies effectively with real-time adjustments.</p>
                </div>
                <div className="col">
                    <h4>Understand Your Business</h4>
                    <p>Adjust your pricing strategies based on seasonal trends and demand fluctuations.</p>
                </div>
            </div>
        </div>
      </section>
      <section className="pro_grid">
        <div className="contain">
            <div className="flex">
                <div className="colL">
                    <h2>Integration and Compatibility</h2>
                    <p>Our AI-powered pricing tool is designed to integrate seamlessly with your existing systems. Whether you're using traditional POS systems or modern cloud-based platforms, our solution ensures smooth and efficient operation without disrupting your workflow.</p>
                    <ul>
                        <li>Compatible with major POS systems</li>
                        <li>Easy workflow integration</li>
                        <li>Minimal setup and maintenance</li>
                    </ul>
                    <div className="btn_blk">
                        <Link href="" className="site_btn">Get Started Today</Link>
                    </div>
                </div>
                <div className="colR">
                    <div className="image">
                        <Image src="/images/progrid.png" alt="" width={700} height={700} />
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="cta_sec">
        <div className="contain">
            <Cta />
        </div>
      </section>
    </main>
    </>
);
}
