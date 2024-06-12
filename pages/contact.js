import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <>
    <main>
      <section className="contact_pg">
        <div className="contain">
            <div className="cntnt">
                <div className="sec_heading">
                    <h1>Get In Touch With Us</h1>
                    <p>We value your feedback and are here to assist you with any questions or concerns you may have. Whether you need support with our products, have a business inquiry, or just want to learn more about our services, our team is ready to help. Please use the contact form below or reach out to us directly via email or phone. We look forward to hearing from you!</p>
                </div>
            </div>
            <div className="flex">
                <div className="colL">
                    <form>
                        <div className="row form_row">
                            <div className="col-6">
                                <div className="txt_blk">
                                    <input type="text" name="fname" className="input" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="txt_blk">
                                    <input type="text" name="lname" className="input" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="txt_blk">
                                    <input type="text" name="email" className="input" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="txt_blk">
                                    <input type="text" className="input" name="phone" placeholder="Phone Number" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="txt_blk">
                                    <input type="text" className="input" name="cname" placeholder="Company Name" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="txt_blk">
                                    <input type="text" className="input" name="subject" placeholder="Subject" />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="txt_blk">
                                    <textarea name="message" className="input" placeholder="Write your message"></textarea>
                                </div>
                            </div>

                        </div>
                        <div className="btn_blk text-center">
                            <button className="site_btn">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="colR">
                    <h4>Let’s discuss on something cool together</h4>
                    <ul>
                        <li>
                            <Link href="mailto:optim@gmail.com">
                                <Image src="/images/envelope.svg" alt="" width={200} height={200} />
                                <span>optim@gmail.com</span>
                            </Link>
                        </li>

                        <li>
                            <Link href="tel:+123 456 789">
                                <Image src="/images/phone.svg" alt="" width={200} height={200} />
                                <span>+123 456 789</span>
                            </Link>
                        </li>

                        <li>
                            <p>
                                <Image src="/images/map.svg" alt="" width={200} height={200} />
                                <span>123 Street 456 House</span>
                            </p>
                        </li>
                    </ul>
                    <div className="social_logon">
                        <Link href="/" target="_blank" rel="noreferrer">
                        <img src="/images/facebook.svg" alt="" />
                        </Link>
                        <Link href="/" target="_blank" rel="noreferrer">
                        <img src="/images/twitter.svg" alt="" />
                        </Link>
                        <Link href="/" target="_blank" rel="noreferrer">
                        <img src="/images/instagram.svg" alt="" />
                        </Link>
                        <Link href="/" target="_blank" rel="noreferrer">
                        <img src="/images/linkedin.svg" alt="" />
                        </Link>
                        <Link href="/" target="_blank" rel="noreferrer">
                        <img src="/images/pintrest.svg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
    </main>
    </>
);
}
