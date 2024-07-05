import React, { useState } from "react";
import Link from "next/link";

export default function ResetPassword() {
    const[passView,setPassView] = useState(true);
    const togglePass = () =>{
      setPassView(!passView);
    }

    const[passViewConfirm,setPassViewConfirm] = useState(true);
    const togglePassConfirm = () =>{
      setPassViewConfirm(!passViewConfirm);
    }
  return (
    <>
      <main className="logon_main">
        <div className="logon_header full_logon_header">
            <div className="logo">
                <Link href="/">
                    <img src="/images/logo.svg" alt="" />
                </Link>
            </div>
        </div>
        <section className="full_logon">
            <div className="contain">
                <div className="cntnt">
                    <h4>Reset Your Password</h4>

                    <form method="POST">
                        <div className="outer_form_blk">
                            <h6>New Password</h6> 
                            <div className="form_blk pass_blk">
                            <input type={passView ? "text" : "password"} className="input" placeholder="Enter new password" />
                            <i className={passView ? "icon-eye" : "icon-eye-slash"} onClick={togglePass}></i>
                            </div>
                        </div>
                        <div className="outer_form_blk">
                            <h6>Confirm New Password</h6> 
                            <div className="form_blk pass_blk">
                            <input type={passViewConfirm ? "text" : "password"} className="input" placeholder="Confirm new password" />
                            <i className={passViewConfirm ? "icon-eye" : "icon-eye-slash"} onClick={togglePassConfirm}></i>
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