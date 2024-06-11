import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Cta from "@/components/cta";

export default function Pricing() {
  return (
    <>
    <main>
      <section className="pricing_banner">
        <div className="contain">
          <div className="cntnt">
            <h1>Flexible Pricing Plans for Every Gas Station</h1>
            <p>Our AI-driven solutions are designed to optimize your gas station pricing strategy, whether you’re a single station or a large chain. Choose the plan that best suits your business needs and achieve complete automation today.</p>
          </div>
          <div className="flex">
            <div className="col">
                <div className="inner">
                    <div className="top_lbl">Basic</div>
                    <div className="price_bdy">
                        <h4>Basic Plan</h4>
                        <p>Perfect for operators who are just wanting to test the basic features and decide whether to invest more into AI-driven pricing</p>
                        <div className="mini_br"></div>
                        <p><strong>What’s included</strong></p>
                        <ul>
                            <li>Real-Time AI Pricing</li>
                            <li>Customizable Business Goals</li>
                            <li>Email & Phone Support</li>
                            <li>Performance Dashboard</li>
                        </ul>
                    </div>
                    <div className="btn_blk">
                        <Link href="/contact" className="site_btn color">Request Quote</Link>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="inner">
                    <div className="top_lbl">Pro</div>
                    <div className="price_bdy">
                        <h4>Pro Plan</h4>
                        <p>Ideal for those who are ready take advantage of all the features available to them through AI and market opportunities.</p>
                        <div className="mini_br"></div>
                        <p><strong>What’s included</strong></p>
                        <ul>
                            <li>Everything in Basic Plan</li>
                            <li>Real Time Sales Insights</li>
                            <li>Priority support</li>
                            <li>Weekly & Monthly Performance Forecasting</li>
                        </ul>
                    </div>
                    <div className="btn_blk">
                        <Link href="/contact" className="site_btn color">Request Quote</Link>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="inner">
                    <div className="top_lbl">Elite</div>
                    <div className="price_bdy">
                        <h4>Elite Plan</h4>
                        <p>Ideal for the innovative type who want new features built and specialized data science reports for their operations.</p>
                        <div className="mini_br"></div>
                        <p><strong>What’s included</strong></p>
                        <ul>
                            <li>Everything in Pro Plan</li>
                            <li>24/7 premium support</li>
                            <li>Advanced analytics and insights</li>
                            <li>Custom Feature Development</li>
                        </ul>
                    </div>
                    <div className="btn_blk">
                        <Link href="/contact" className="site_btn color">Request Quote</Link>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className="report_sec">
        <div className="contain">
            <div className="flex">
                <div className="colL">
                    <div className="sec_heading">
                        <h2>Price Sensitivity Report</h2>
                    </div>
                    <p>Get a one-time, detailed analysis of how sensitive your gas station is to your competition's prices. This report provides actionable insights to help you adjust your pricing strategy effectively.</p>
                    <ul>
                        <li>+ 3 month free trial of AI Pricing</li>
                        <li>After running the analysis on your site the first time, we will reproduce the report at a heavily reduced price if anything in the market changes</li>
                    </ul>
                </div>
                <div className="colR">
                    <div className="inner">
                        <h1>$1,999 <sub>/site</sub></h1>
                        <ul>
                            <li>Comprehensive competitive pricing analysis</li>
                            <li>Insights on market trends and patterns</li>
                            <li>Recommendations for optimal pricing strategies</li>
                            <li>Easy-to-understand visualizations</li>
                            <li>Proven to increase gross profit by at least 10%</li>
                            <li>Proven to increase gross profit volume by at least 5%</li>
                        </ul>
                        <div className="btn_blk">
                            <Link href="/signup" className="site_btn color">Get started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="solutions_sec">
        <div className="contain">
            <div className="sec_heading text-center">
                <h2>Custom Data Science Solutions Tailored to Your Needs</h2>
                <p>Need advanced insight on a different part of your operations? Our data science team is capable of illuminating the truth behind every part of your business, so you can make empowered decisions.</p>
            </div>
            <div className="flex">
                <div className="colL">
                    <div className="image">
                        <Image src="/images/solution1.png" alt="" width={700} height={500} />
                    </div>
                </div>
                <div className="colR">
                    <ul>
                        <li>Predictive Modeling and Forecasting</li>
                        <li>Data Analysis and Visualization</li>
                        <li>Predictive Modeling anCustom Algorithm Developmentd Forecasting</li>
                        <li>Big Data Processing</li>
                        <li>Data Engineering</li>
                        <li>AI and Machine Learning Solutions</li>
                    </ul>
                </div>
            </div>
            <div className="btn_blk text-center">
                <Link href="/signup" className="site_btn color">Get started</Link>
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
