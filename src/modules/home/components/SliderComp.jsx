import React from "react";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
};
const SliderComp = ({ slides }) => {
  return (
    <>
      <Slider {...settings} className="home-slider">
        {slides.map((slide, index) => (
          <div key={index} className="h-screen">
            <div
              className="h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
                <h1 className="text-4xl md:text-5xl font-italic font-serif leading-relaxed mb-4">
                  {slide.heading}
                </h1>
                <h2 className="text-xs md:text-sm font-semibold uppercase tracking-wider">
                  {slide.subheading}
                </h2>
                <p>
                  <a
                    href="#"
                    className="btn btn-primary inline-block bg-green-500 border border-green-500 rounded-full px-6 py-3 mt-4 text-white text-center transition duration-300 ease-in-out hover:bg-transparent hover:text-green-500"
                  >
                    View Details
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SliderComp;
