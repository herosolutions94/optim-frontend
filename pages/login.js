import React, { useState } from "react";
import Link from "next/link";

export default function Login() {
  const[passView,setPassView] = useState(true);
  const togglePass = () =>{
    setPassView(!passView);
  }
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
                <p>Don’t have an account? <Link href="signup">Get started today</Link></p>
            </div>
        </div>
        <section className="logon_sec">
            <div className="inner_left">
              <div className="inner">
                <h4>Login to Your Account</h4>
                <p>Automate pricing and reporting effortlessly. Optimize your gas station's performance in real-time. Log in to start.</p>
                <form method="POST">
                  <div className="outer_form_blk">
                    <div className="form_blk">
                      <h6>Email</h6>
                      <input type="text" className="input" placeholder="hi@example.com" />
                    </div>
                  </div>
                  <div className="outer_form_blk">
                    <h6>Password</h6> 
                    <div className="form_blk pass_blk">
                      <input type={passView ? "text" : "password"} className="input" placeholder="Enter password" />
                      <i className={passView ? "icon-eye" : "icon-eye-slash"} onClick={togglePass}></i>
                    </div>
                  </div>
                  <div className="have_check">
                    <Link href="/forgot-password">Forgot Password?</Link>
                  </div>
                  <div className="btn_blk">
                    <button
                      className="site_btn block"
                      type="submit"
                    >Login</button>
                    <Link href="" className="site_btn block blank">
                      <img src="/images/google.svg" alt="Continue with Google"/>
                      <span>Continue with Google</span>
                    </Link>
                  </div>
                  
                </form>
              </div>
            </div>
            <div className="inner_right">
              <div className="image">
                <img src="/images/login.png" alt="" />
              </div>
            </div>
        </section>
      </main>
    </>
  );
}