import Link from "next/link"
import React from 'react'

export default function Footer() {
  const data = {
    list_02: [
      {
        id: 1,
        text: "Home",
        link: "/",
      },
      {
        id: 2,
        text: "About Us",
        link: "/",
      },
      {
        id: 3,
        text: "Pricing",
        link: "/pricing",
      },
      {
        id: 9,
        text: "Contact Us",
        link: "/",
      }
    ],
    list_03: [
      {
        id: 5,
        text: "Real-Time AI Pricing",
        link: "/",
      },
      {
        id: 6,
        text: "Price Sensitivity Report",
        link: "/",
      }
    ],
    
  }
    return (
      <footer>
          <div className="contain">
            <div className="flex_row main_row row">
              <div className="col-xl-4">
                <div className="in_col">
                  <h4>Company</h4>
                  <p>Stay ahead of your competition with real-time pricing adjustments and insights.</p>
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
              <div className="col-lg mid_col">
                <div className="in_col">
                  <h4>
                  Quick Links
                  </h4>
                  <ul className="list">
                    {data.list_02.map((val) => {
                      return (
                        <li key={val.id}>
                          <Link href={val.link}>{val.text}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg mid_col">
                <div className="in_col">
                  <h4>
                  Products
                  </h4>
                  <ul className="list">
                    {data.list_03.map((val) => {
                      return (
                        <li key={val.id}>
                          <Link href={val.link}>{val.text}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="in_col">
                  <h4>
                  Join Our Mailing List
                  </h4>
                  <div className="subscribe">
                    <p>Stay up to date with the latest news and deals!</p>
                    <form>
                      <input type="text" className="input" name="" placeholder={"@ email address"}/>
                      <button type="submit" className="site_btn">SUBMIT</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="copyright">
              <p className="text-center">
              © Copyright 2022, All Rights Reserved
              </p>
            </div>
          </div>
        </footer>
    )
  }