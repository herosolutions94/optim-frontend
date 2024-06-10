import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Cta from "@/components/cta";

export default function Pricing() {
  return (
    <>
    <main>
      <section className="about_banner">
        <div className="contain">
            <div className="cntnt">
                <div className="sec_heading">
                    <h1>About Us</h1>
                    <p>From 50 years in fuel retail to data scientists who worked in particle physics, our team is experienced and prepared to solve your toughest problems.</p>
                </div>
            </div>
        </div>
      </section>
      <section className="mission_vision_sec">
        <div className="contain">
            <div className="sec_heading">
                <h2>Our Mission & Vision</h2>
                <p>We are dedicated to transforming the way gas stations operate by providing innovative, reliable, and user-friendly software solutions tailored to meet the unique needs of our clients.</p>
            </div>
            <div className="flex">
                <div className="col">
                    <div className="inner">
                        <p>At Optim, our mission is to empower gas stations with advanced, AI-driven tools to optimize their pricing strategies, maximize profitability, and stay competitive in a dynamic market.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="inner">
                        <p>Our vision is to be the leading provider of intelligent pricing solutions, trusted by gas station owners and operators worldwide for our reliability, innovation, and customer-centric approach.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="stroy_sec">
        <div className="contain">
            <div className="sec_heading">
                <h2>Our Story</h2>
                <p>In response to the challenges faced by gas station owners, we embarked on a mission to revolutionize the industry with AI-driven solutions.</p>
            </div>
            <div className="flex">
                <div className="colL">
                    <h4>Our Journey Begins</h4>
                    <p>In the early days, our founders saw a critical need in the gas station industry: the ability to adapt and thrive in a rapidly changing market. With a vision to empower gas station owners, we set out to develop cutting-edge solutions that leverage the power of artificial intelligence.</p>
                    <div className="mini_br"></div>
                    <h4>Facing the Fuel Pricing Dilemma</h4>
                    <p>Gas station owners constantly grapple with the challenge of setting competitive yet profitable fuel prices. The fluctuating nature of fuel costs, coupled with intense competition, makes it a daunting task to stay ahead. Traditional methods were not enough to keep up with these demands, leading to inefficiencies and lost revenue opportunities.</p>
                    <div className="mini_br"></div>
                    <h4>Pioneering AI-Driven Solutions</h4>
                    <p>Our team of experts, passionate about technology and innovation, developed a suite of AI-driven tools designed specifically for the gas station industry. These solutions automate pricing and reporting, enabling real-time optimization of performance. With intuitive interfaces and powerful analytics, our tools provide actionable insights that drive profitability and growth.</p>
                </div>
                <div className="colR">
                    <div className="image">
                        <Image src="/images/story.png" alt="" width={700} height={500} />
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
                                <Image src="/images/val1.png" alt="" width={200} height={200} />
                            </div>
                            <h4>Innovation</h4>
                            <p>We are committed to developing cutting-edge technologies that drive industry advancements.</p>
                        </div>
                    </div>
                    <div className="inner">
                        <div className="inner_col">
                            <div className="img_icon">
                                <Image src="/images/val2.png" alt="" width={200} height={200} />
                            </div>
                            <h4>Integrity</h4>
                            <p>We operate with transparency and honesty, building trust with our clients through ethical business practices.</p>
                        </div>
                    </div>
                    <div className="inner">
                        <div className="inner_col">
                            <div className="img_icon">
                                <Image src="/images/val3.png" alt="" width={200} height={200} />
                            </div>
                            <h4>Customer Focus</h4>
                            <p>Our customers are at the heart of everything we do. We strive to exceed their expectations through exceptional service and support.</p>
                        </div>
                    </div>
                    <div className="inner">
                        <div className="inner_col">
                            <div className="img_icon">
                                <Image src="/images/val4.png" alt="" width={200} height={200} />
                            </div>
                            <h4>Excellence</h4>
                            <p>We aim for the highest standards in all aspects of our business, from product development to customer interactions.</p>
                        </div>
                    </div>
                </div>
                <div className="colR">
                    <div className="sec_heading">
                        <h2>Our Values</h2>
                    </div>
                    <p>We aim to set the standard for excellence and innovation, helping gas station owners and operators around the world achieve their business goals and stay competitive in an ever-changing market.</p>
                    <div className="btn_blk">
                        <Link href="" className="site_btn">Contact Us</Link>
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
