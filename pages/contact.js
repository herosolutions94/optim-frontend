import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import http from "../helpers/http";
import { cmsFileUrl, doObjToFormData } from "../helpers/helpers";
import { parse } from "cookie";
import MetaGenerator from "../components/meta-generator";
import Text from "../components/text";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export const getServerSideProps = async (context) => {
  const { req, query } = context;
  const plan_id = query?.plan;
  const cookieHeader = req.headers.cookie || "";
  const cookieValue = parse(cookieHeader);
  const authToken =
    cookieValue["authToken"] !== undefined &&
    cookieValue["authToken"] !== null &&
    cookieValue["authToken"] !== ""
      ? cookieValue["authToken"]
      : null;
  const result = await http
    .post(
      "contact-page",
      doObjToFormData({ token: authToken, plan_id: plan_id })
    )
    .then((response) => response.data)
    .catch((error) => error.response.data.message);

  return { props: { result } };
};

export default function Contact({ result }) {
  const { page_title, site_settings, content, plan } = result;
  const router = useRouter();
  const plan_id = router.query?.plan ? router.query?.plan : 0;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm();
  useEffect(() => {
    if (plan_id > 0) {
      setValue("plan_id", plan?.id);
    }
  }, [plan]);

  const [loading, setLoading] = useState(false);

  async function handleContactSubmit(formData, e) {
    // console.log(formData);
    // e.preventDefault();
    setLoading(true);
    const result = await http
      .post("save-contact-message", doObjToFormData(formData))
      .then((response) => {
        if (response.data.msg) {
          toast.success(<Text string={response.data.msg} />);
          setLoading(false);
          setTimeout(() => {
            reset();
          }, 2000);
        } else {
          toast.error(<Text string={response.data.validation_error} />);
          setLoading(false);
        }
      })
      .catch((error) => error.response.data.message);
  }

  return (
    <>
      <MetaGenerator
        page_title={page_title + " - " + site_settings?.site_name}
        meta_info={content}
      />

      <main>
        <section className="contact_pg">
          <div className="contain">
            <div className="cntnt">
              <div className="sec_heading">
                <h1>
                  <Text string={content?.section1_heading} />
                </h1>
                <Text string={content?.section1_text} />
              </div>
            </div>
            <div className="flex">
              <div className="colL">
                <form
                  onSubmit={handleSubmit(handleContactSubmit)}
                  method="POST"
                >
                  <div className="row form_row">
                    <div className="col-6">
                      <div className="txt_blk">
                        {plan_id > 0 && (
                          <input
                            type="hidden"
                            name="plan_id"
                            defaultValue={plan?.id}
                            {...register("plan_id", {
                              required: "Plan not exist.Plan is required!",
                            })}
                          />
                        )}
                        <input
                          type="text"
                          name="fname"
                          className="input"
                          placeholder="First Name"
                          {...register("fname", {
                            required: "First Name is required!",
                          })}
                        />
                        <div
                          className="validation-error"
                          style={{ color: "red" }}
                        >
                          {errors.fname?.message}
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="txt_blk">
                        <input
                          type="text"
                          name="lname"
                          className="input"
                          placeholder="Last Name"
                          {...register("lname", {
                            required: "Last Name is required!",
                          })}
                        />
                        <div
                          className="validation-error"
                          style={{ color: "red" }}
                        >
                          {errors.lname?.message}
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="txt_blk">
                        <input
                          type="text"
                          name="email"
                          className="input"
                          placeholder="Email"
                          {...register("email", {
                            required: "Email is required!",
                            pattern: {
                              value:
                                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: "Please enter a valid email",
                            },
                          })}
                        />
                        <div
                          className="validation-error"
                          style={{ color: "red" }}
                        >
                          {errors.email?.message}
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="txt_blk">
                        <input
                          type="text"
                          className="input"
                          name="phone"
                          placeholder="Phone Number"
                          {...register("phone", {
                            required: "Phone Number is required!",
                          })}
                        />
                        <div
                          className="validation-error"
                          style={{ color: "red" }}
                        >
                          {errors.phone?.message}
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="txt_blk">
                        <input
                          type="text"
                          className="input"
                          name="company"
                          placeholder="Company Name"
                          {...register("company", {
                            required: "Company Name is required!",
                          })}
                        />
                        <div
                          className="validation-error"
                          style={{ color: "red" }}
                        >
                          {errors.company?.message}
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="txt_blk">
                        <input
                          type="text"
                          className="input"
                          name="subject"
                          placeholder="Subject"
                          {...register("subject", {
                            required: "Subject is required!",
                          })}
                        />
                        <div
                          className="validation-error"
                          style={{ color: "red" }}
                        >
                          {errors.subject?.message}
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="txt_blk">
                        <textarea
                          name="comments"
                          className="input"
                          placeholder="Write your message"
                          {...register("comments", {
                            required: "Message is required.",
                          })}
                        ></textarea>
                        <div
                          className="validation-error"
                          style={{ color: "red" }}
                        >
                          {errors.comments?.message}
                        </div>
                      </div>
                    </div>
                    {plan_id > 0 && (
                      <div className="col-6">
                        <div className="txt_blk">
                          <input
                            type="hidden"
                            name="plan_id"
                            defaultValue={plan?.id}
                            {...register("plan_id", {
                              required: "Plan does not exist! OR Plan is required!",
                            })}
                          />
                        </div>
                      </div>
                    )}
                    <div className="validation-error" style={{ color: "red" }}>
                      {errors.plan_id?.message}
                    </div>
                  </div>
                  <div className="btn_blk text-center">
                    <button className="site_btn">
                      Submit
                      {loading && (
                        <i
                          className={loading ? "spinner" : "spinnerHidden"}
                        ></i>
                      )}
                    </button>
                  </div>
                </form>
              </div>
              <div className="colR">
                <h4>
                  <Text string={content?.section2_text} />
                </h4>
                <ul>
                  {site_settings?.site_email ? (
                    <li>
                      <Link href={"mailto:" + site_settings?.site_email}>
                        <Image
                          src="/images/envelope.svg"
                          alt={site_settings?.site_email}
                          width={200}
                          height={200}
                        />
                        <span>{site_settings?.site_email}</span>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {site_settings?.site_phone ? (
                    <li>
                      <Link href={"tel:" + site_settings?.site_phone}>
                        <Image
                          src="/images/phone.svg"
                          alt={site_settings?.site_phone}
                          width={200}
                          height={200}
                        />
                        <span>{site_settings?.site_phone}</span>
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  {site_settings?.site_address ? (
                    <li>
                      <p>
                        <Image
                          src="/images/map.svg"
                          alt={site_settings?.site_address}
                          width={200}
                          height={200}
                        />
                        <span>{site_settings?.site_address}</span>
                      </p>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
                <div className="social_logon">
                  {site_settings?.site_facebook ? (
                    <Link
                      href={site_settings?.site_facebook}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/images/facebook.svg" alt="facebook" />
                    </Link>
                  ) : (
                    ""
                  )}
                  {site_settings?.site_twitter ? (
                    <Link
                      href={site_settings?.site_twitter}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/images/twitter.svg" alt="twitter" />
                    </Link>
                  ) : (
                    ""
                  )}
                  {site_settings?.site_instagram ? (
                    <Link
                      href={site_settings?.site_instagram}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/images/instagram.svg" alt="instagram" />
                    </Link>
                  ) : (
                    ""
                  )}
                  {site_settings?.site_discord ? (
                    <Link
                      href={site_settings?.site_discord}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/images/linkedin.svg" alt="linkedin" />
                    </Link>
                  ) : (
                    ""
                  )}
                  {site_settings?.site_pinterest ? (
                    <Link
                      href={site_settings?.site_pinterest}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/images/pintrest.svg" alt="pintrest" />
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
