import Link from "next/link";
import React, { useState } from "react";
import Text from "./text";
import { useForm } from "react-hook-form";
import { doObjToFormData } from "../helpers/helpers";
import { toast } from "react-hot-toast";
import http from "../helpers/http";

export default function Footer({ siteSettings }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);

  async function handleNewsletterSubmit(formData, e) {
    // e.preventDefault();

    setLoading(true);

    const result = await http
      .post("save-newsletter", doObjToFormData(formData))
      .then((response) => {
        // console.log(response);
        if (response.data.msg) {
          toast.success(<Text string={response.data.msg} />);
          setLoading(false);
          setTimeout(() => {
            reset();
          }, 2000);
        } else {
          // console.log(response.data.validation_error);
          toast.error(<Text string={response.data.validation_error} />);
          setLoading(false);
        }

        // console.log(response.data);
      })

      .catch((error) => error.response.data.message);
  }

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
        link: "/about",
      },
      {
        id: 3,
        text: "Pricing",
        link: "/pricing",
      },
      {
        id: 9,
        text: "Contact Us",
        link: "/contact",
      },
    ],
    list_03: [
      {
        id: 5,
        text: "Real-Time AI Pricing",
        link: "/real-time-ai-pricing",
      },
      {
        id: 6,
        text: "Price Sensitivity Report",
        link: "/price-sensitivity-report",
      },
    ],
  };
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer>
      <div className="contain">
        <div className="flex_row main_row row">
          <div className="col-xl-4">
            <div className="in_col">
              <h4>
                <Text string={siteSettings?.site_ft_heading1} />
              </h4>
              <p>
                <Text string={siteSettings?.site_about} />
              </p>
              <div className="social_logon">
                <Link
                  href={siteSettings?.site_facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/images/facebook.svg" alt="facebook" />
                </Link>
                <Link
                  href={siteSettings?.site_twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/images/twitter.svg" alt="twitter" />
                </Link>
                <Link
                  href={siteSettings?.site_instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/images/instagram.svg" alt="instagram" />
                </Link>
                <Link
                  href={siteSettings?.site_discord}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/images/linkedin.svg" alt="linkedin" />
                </Link>
                <Link
                  href={siteSettings?.site_pinterest}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/images/pintrest.svg" alt="pintrest" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg mid_col">
            <div className="in_col">
              <h4>
                <Text string={siteSettings?.site_ft_heading2} />
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
                <Text string={siteSettings?.site_ft_heading3} />
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
                <Text string={siteSettings?.site_ft_heading4} />
              </h4>
              <div className="subscribe">
                <p>
                  <Text string={siteSettings?.site_newsletter_txt} />
                </p>
                <form
                  onSubmit={handleSubmit(handleNewsletterSubmit)}
                  method="POST"
                >
                  <input
                    type="email"
                    className="input"
                    // name="email"
                    placeholder={"@ email address"}
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  <button type="submit" className="site_btn">
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p className="text-center">
            © Copyright {year}, {siteSettings?.site_name}{" "}
            {siteSettings?.site_copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
