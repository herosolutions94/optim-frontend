import React, { useState } from "react";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <main className="logon_main">
        <div className="logon_header">
            <div className="logo">
                <Link href="/">
                    <img src="/images/logo.svg" alt="" />
                </Link>
            </div>
            <div className="ask_question text-center">
                <p>Already have an account?  <Link href="/login">Login</Link></p>
            </div>
        </div>
        <section className="logon_sec">
            <div className="inner_left">
              <div className="inner">
                <h4>Join Us Today</h4>
                <p>Automate pricing and reporting effortlessly. Optimize your gas station's performance in real-time. Log in to start.</p>
                <form method="POST">
                    <div className="outer_form_blk">
                    <div className="form_blk">
                      <h6>First Name</h6>
                      <input type="text" className="input" placeholder="First name" />
                    </div>
                  </div>
                  <div className="outer_form_blk">
                    <div className="form_blk">
                      <h6>Last Name</h6>
                      <input type="text" className="input" placeholder="Last name" />
                    </div>
                  </div>
                  
                  <div className="outer_form_blk">
                    <div className="form_blk">
                      <h6>Email</h6>
                      <input type="text" className="input" placeholder="hi@example.com" />
                    </div>
                  </div>
                  <div className="outer_form_blk">
                    <div className="form_blk">
                      <h6>Phone</h6>
                      <input type="text" className="input" placeholder="Enter Phone" />
                    </div>
                  </div>
                  <div className="outer_form_blk">
                    <div className="form_blk">
                      <h6>Address</h6>
                      <input type="text" className="input" placeholder="Enter Address" />
                    </div>
                  </div>
                  <div className="btn_blk">
                    <button
                      className="site_btn block"
                      type="submit"
                    >Submit</button>
                  </div>
                  
                </form>
              </div>
            </div>
            <div className="inner_right">
              <div className="image">
                <img src="/images/signup.png" alt="" />
              </div>
            </div>
        </section>
      </main>
    </>
  );
}