import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { cmsFileUrl } from "../helpers/helpers";
import { authToken } from "../helpers/authToken";
import http from "../helpers/http";
import { doObjToFormData } from "../helpers/helpers";
export default function Header({ siteSettings }) {
  const [toggle, setToggle] = useState(false);
  const ToggleAction = () => {
    setToggle(!toggle);
  };
  const [resourceDrop, setResourceDrop] = useState(false);
  const ToggleResourceDrop = () => {
    setResourceDrop(!resourceDrop);
  };

  const closeResourceDrop = () => {
    setResourceDrop(false);
    // setToggle(false);
  };
  // const [member, setMember] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // dispatch(fetchSiteSettings())
    const fetchSiteSettings = async () => {
      setIsLoading(true);
      try {
        // Make the API request using Axios
        const params = { token: authToken() };
        const result = await http
          .post("site-settings", doObjToFormData(params))
          .then((response) => response.data)
          .catch((error) => error.response.data.message);
        // setMember(result?.memData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    };

    fetchSiteSettings();
  }, []);

  const token = authToken();


  return (
    <header>
      <div className="contain">
        <div className="logo">
          <Link href="/">
            <img
              src={cmsFileUrl(siteSettings?.site_logo)}
              alt={siteSettings?.site_name}
            />
          </Link>
        </div>
        <div
          className={toggle ? "toggle active" : "toggle"}
          onClick={ToggleAction}
        >
          <span></span>
        </div>
        <nav id="nav" className={toggle ? "active" : ""}>
          <ul>
                  <li
              className={`drop ${resourceDrop ? "open" : ""}`}
              onMouseEnter={ToggleResourceDrop}
              onMouseLeave={closeResourceDrop}
              onClick={ToggleResourceDrop}
            >
              <div className="drop_btn">Products</div>
              <ul className={resourceDrop ? "sub sm active" : "sub sm"}>
                <li onClick={ToggleAction}>
                  <Link
                    href="/real-time-ai-pricing"
                    onClick={closeResourceDrop}
                  >
                    Real-Time AI Pricing
                  </Link>
                </li>
                <li onClick={ToggleAction}>
                  <Link
                    href="/price-sensitivity-report"
                    onClick={closeResourceDrop}
                  >
                    Price Sensitivity Report
                  </Link>
                </li>
                         </ul>
            </li>
            <li>
              <Link href="/pricing" onClick={ToggleAction}>
                Pricing
              </Link>
            </li>
                        <li>
              <Link href="/contact" onClick={ToggleAction}>
                Contact Us
              </Link>
            </li>
      
            <li>
              <Link href="/about" onClick={ToggleAction}>
                About Us
              </Link>
            </li>
      
           
            {!token && (
              <>
              <li className="show_cell_lnk">
                <Link href="/login" onClick={ToggleAction}>
                  Login
                </Link>
              </li>
            
              <li className="show_cell_lnk">
                <Link
                  href="/signup"
                  className="site_btn"
                  onClick={ToggleAction}
                >
                  Signup
                </Link>
              </li>
              </>
              
            )}
          </ul>
        </nav>
        <div className="login_btns">
          <ul>
            {!token && (
              <>
              <li>
              <Link href="/login" onClick={ToggleAction}>
                Login
              </Link>
            </li>
            <li className="btn_blk">
              <Link href="/signup" className="site_btn" onClick={ToggleAction}>
                Signup
              </Link>
            </li>
              </>
            )}
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    </header>
  );
}
