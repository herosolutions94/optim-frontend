import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import Text from "../components/text";
export default function TestimonialsNew({ data }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    draggable: false,
    swipe: false,  
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {data?.map((val) => {
          return (
            <div className="item" key={val.id}>
              <div className="inner">
                <div className="testi_flex">
                  <div className="testi_icon">
                    <img src="/images/quote.svg" alt={val?.name} />
                  </div>
                  <div className="testi_footer">
                    <Text string={val?.message} />
                    <div className="lower_content">
                      <h5>
                        {" "}
                        <Text string={val?.name} />
                      </h5>
                      <p>
                        <span>
                          {" "}
                          <Text string={val?.designation} />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}
