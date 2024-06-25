import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/custom.scss";
import Layout from "../components/layout";
import { parse } from "cookie";
import http from "../helpers/http";
import { doObjToFormData } from "../helpers/helpers";
import { Toaster } from "react-hot-toast";
import NextNProgress from "nextjs-progressbar";

export default function App({ Component, pageProps, siteSettings }) {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);
  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return (
        <>
          <NextNProgress color="#4472C9" />
          <Layout siteSettings={siteSettings}>
            <Toaster position="top-right" />
            {page}
          </Layout>
        </>
      );
    };
  return renderWithLayout(<Component {...pageProps} />);
}

App.getInitialProps = async ({ ctx }) => {
  const cookies = parse(ctx?.req?.headers?.cookie || "");
  const authToken = cookies?.authToken || "";
  const siteSettings = await http
    .post("site-settings", doObjToFormData({ token: authToken }))
    .then((response) => response?.data?.site_settings)
    .catch((error) => error?.response?.data?.message);
  return { siteSettings };
};
