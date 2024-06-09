import Link from "next/link"
import React, { useState } from 'react'
import Cta from "./cta";

export default function Footer() {
  const [footOne , setFootOne] = useState(false);
  const [footTwo , setFootTwo] = useState(false);
  const [footThree , setFootThree] = useState(false);
  const [footFour , setFootFour] = useState(false);

  const togFootOne = () =>{
    setFootOne(!footOne);
    setFootTwo(false);
    setFootThree(false);
    setFootFour(false);
  }

  const togFootTwo = () =>{
    setFootOne(false);
    setFootTwo(!footTwo);
    setFootThree(false);
    setFootFour(false);
  }

  const togFootThree = () =>{
    setFootOne(false);
    setFootTwo(false);
    setFootThree(!footThree);
    setFootFour(false);
  }

  const togFootFour = () =>{
    setFootOne(false);
    setFootTwo(false);
    setFootThree(false);
    setFootFour(!footFour);
  }
  
  const data = {
    solutions: [
      {
        id: "sol_1",
        text: "Pharma Intel",
        link: "/solutions/pharma_intelligence",
      },
      {
        id: "sol_2",
        text: "Regulatory Intel",
        link: "/solutions/regulatory",
      },
      {
        id: "sol_3",
        text: "Post-market (MedTech)",
        link: "/solutions/post_market",
      },
      {
        id: "sol_4",
        text: "Executive Dashboard",
        link: "/solutions/exec_dashboard",
      },
      {
        id: "sol_5",
        text: "CER Table Creator",
        link: "/solutions/com_table",
      },
      {
        id: "sol_6",
        text: "Clinical Trials",
        link: "/solutions/clinical_trial",
      },
    ],
    capabilities: [
      {
        id: "cap_1",
        text: "Data Modernization",
        link: "/capability/data-modernization",
      },
      {
        id: "cap_2",
        text: "External API",
        link: "/capability/data-integration",
      }
    ],
    resources: [
      {
        id: "res_1",
        text: "Case studies",
        link: "/casestudy",
      },
      {
        id: "res_2",
        text: "Citations",
        link: "/casestudy#citation",
      },
      {
        id: "res_3",
        text: "Testimonials",
        link: "/testimonials",
      }
    ],
    about: [
      {
        id: "company",
        text: "Company",
        link: "/about",
      },
      {
        id: "contact",
        text: "Contact Us",
        link: "/contact",
      },
      {
        id: "terms",
        text: "Terms & Conditions",
        link: "/terms-conditions",
      },
      {
        id: "privacy",
        text: "Privacy policy",
        link: "/privacy-policy",
      }
    ],
    
  }
    return (
      <>
      <section className="cta_sec">
        <div className="contain">
          <Cta />
        </div>
      </section>
      <footer>
          <div className="contain">
            <div className="flex_row main_row row">
              <div className="col-xl-5">
                <div className="in_col">
                  <div className="logo">
                      <Link href="/">
                          <img src="/images/logo.svg" alt="" />
                      </Link>
                  </div>
                  <p>Leveraging AI / ML to provide life sciences with unprecedented analytics & insights to guide data driven decisions and accelerate commercial success</p>
                  <div className="social_logon">
                    <p>Follow Us</p>
                    <Link href="/" target="_blank" rel="noreferrer">
                      <img src="/images/linkedin.svg" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-2">
                <div className="in_col">
                  <h4 onClick={togFootOne}>
                  Solutions
                  </h4>
                  <ul className={footOne ? "list active" : "list"}>
                    {data.solutions.map((val) => {
                      return (
                        <li key={val.id}>
                          <Link href={val.link}>{val.text}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg">
                <div className="in_col">
                  <h4 onClick={togFootTwo}>
                  Capabilities
                  </h4>
                  <ul className={footTwo ? "list active" : "list"}>
                    {data.capabilities.map((val) => {
                      return (
                        <li key={val.id}>
                          <Link href={val.link}>{val.text}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg">
                <div className="in_col">
                  <h4 onClick={togFootThree}>
                  Resources
                  </h4>
                  <ul className={footThree ? "list active" : "list"}>
                    {data.resources.map((val) => {
                      return (
                        <li key={val.id}>
                          <Link href={val.link}>{val.text}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg">
                <div className="in_col">
                  <h4 onClick={togFootFour}>
                  About Us
                  </h4>
                  <ul className={footFour ? "list active" : "list"}>
                    {data.about.map((val) => {
                      return (
                        <li key={val.id}>
                          <Link href={val.link}>{val.text}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
           
            <div className="copyright">
              <p className="text-center">
              Copyright © 2024 Basil Systems, Inc
              </p>
            </div>
          </div>
      </footer>
      </>
    )
  }