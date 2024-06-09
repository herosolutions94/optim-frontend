import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/custom.scss'
import Layout from '../components/layout'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);
  const renderWithLayout =
    Component.getLayout ||
    function (page) {
      return <Layout>{page}</Layout>;
    };

  return renderWithLayout(<Component {...pageProps} />);
}