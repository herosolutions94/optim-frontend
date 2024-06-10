import React, { useState } from "react";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <>
      <main className="logon_main">
        <div className="logon_header full_logon_header">
            <div className="logo">
                <Link href="/">
                    <img src="/images/logo.svg" alt="" />
                </Link>
            </div>
            <div className="ask_question text-center">
                <p>Don’t have an account? <Link href="signup">Get started today</Link></p>
            </div>
        </div>
        <section className="full_logon">
            <div className="contain">
                <div className="cntnt">
                    <h4>Forgot Password</h4>
                    <p>Enter your email address associated  with your account</p>

                    <form method="POST">
                        <div className="outer_form_blk">
                            <div className="form_blk">
                            <h6>Email</h6>
                            <input type="text" className="input" placeholder="Enter Email" />
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
        </section>
      </main>
    </>
  );
}