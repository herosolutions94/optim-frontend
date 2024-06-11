import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import BigCta from "@/components/big-cta";
import Cta from "@/components/cta";

export default function PriceSensitivityReport() {
  return (
    <>
    <main>
    <section className="pro_grid p_t_4">
        <div className="contain">
            <div className="flex">
                <div className="colL">
                    <h1>Price Sensitivity Report</h1>
                    <p>This report is designed for us to give you the answers you need to optimize fuel pricing using your systems and decision making.</p>
                </div>
                <div className="colR">
                    <div className="image">
                        <Image src="/images/report.png" alt="" width={700} height={700} />
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
                                <Image src="/images/pro_f1.png" alt="" width={200} height={200} />
                            </div>
                            <h4>Customized Analysis</h4>
                            <p>Tailored analysis based on the unique characteristics of the gas station in question.</p>
                        </div>
                    </div>
                    <div className="inner">
                        <div className="inner_col">
                            <div className="img_icon">
                                <Image src="/images/pro_f2.png" alt="" width={200} height={200} />
                            </div>
                            <h4>Competitor Comparison</h4>
                            <p>Detailed comparison with competitor pricing strategies to gauge sensitivity.</p>
                        </div>
                    </div>
                    <div className="inner">
                        <div className="inner_col">
                            <div className="img_icon">
                                <Image src="/images/pro_f3.png" alt="" width={200} height={200} />
                            </div>
                            <h4>Hourly and Daily Breakdown</h4>
                            <p>We will tell you exactly what prices will get you what results for every hour of every day of the week.</p>
                        </div>
                    </div>
                    <div className="inner">
                        <div className="inner_col">
                            <div className="img_icon">
                                <Image src="/images/pro_f4.png" alt="" width={200} height={200} />
                            </div>
                            <h4>Visualizations</h4>
                            <p>Clear and intuitive visual representations of the pricing dynamics for easy understanding.</p>
                        </div>
                    </div>
                </div>
                <div className="colR">
                    <div className="sec_heading">
                        <h2>Our Key Features</h2>
                    </div>
                    <p>The price sensitivity report will empower you with insight you need to know exactly what pricing decisions to make and it will provide a pricing reference that will not get outdated.</p>
                    <div className="btn_blk">
                        <Link href="" className="site_btn">Get Started Today</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      <section className="how_it_works_product_sec">
        <div className="contain">
            <div className="flex">
                <div className="col self_center">
                    <h2>How It Works</h2>
                    <p>Our AI-powered pricing tool operates by continuously analyzing market data and adjusting prices based on predefined business goals.</p>
                </div>
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
                            <Image src="/images/pro_icon5.png" alt="" width={200} height={200} />
                        </div>
                        <h4>Analysis</h4>
                        <p>Our AI algorithms analyze the data to identify patterns and correlations.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="inner">
                        <div className="img_icon">
                            <Image src="/images/pro_icon6.png" alt="" width={200} height={200} />
                        </div>
                        <h4>Reporting</h4>
                        <p>A detailed report is generated, highlighting key findings and recommendations.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <BigCta />
      <section className="benefits_pro_two">
        <div className="contain">
            <div className="cntnt text-center">
                <h2>Benefits</h2>
                <p>Unlock the Power of Pricing Intelligence with our Price Sensitivity Report service. By leveraging advanced data analytics and AI algorithms, this one-time analysis offers a myriad of benefits to gas station owners and operators.</p>
            </div>
            <div className="flex">
                <div className="col">
                    <h4>Optimized Pricing Strategies</h4>
                    <p>Understand how your gas station's pricing affects customer behavior.</p>
                </div>
                <div className="col">
                    <h4>Competitive Edge</h4>
                    <p>Gain insights into how to position your prices effectively in the market.</p>
                </div>
                <div className="col">
                    <h4>Timeless Insight</h4>
                    <p>If new competition does enter the market, we will rerun the analysis at a significantly reduced price.</p>
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
