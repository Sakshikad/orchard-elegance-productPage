import React, { useState, useEffect } from "react";

import bg1 from "../../assets/media/images/orchard-1872997_1280-1.jpg";
import bg2 from "../../assets/media/images/category-3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import DealOfTheDay from "./components/DealOfTheDay";
import Testimonials from "./components/Testimonials";
import SliderComp from "./components/SliderComp";
const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      backgroundImage: bg1,
      heading: "Indulge in Nature's Bounty: Fresh, Organic & Sumptuous Fruits",
      subheading:
        "Unveil the lusciousness of nature through our organic fruit delivery",
    },
    {
      backgroundImage: bg2,
      heading:
        "Immerse Yourself in Nature's Finest: 100% Fresh & Organic Fruits",
      subheading:
        "Experience the essence of pure, organic goodness delivered to your doorstep",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className="home overflow-hidden">
        <SliderComp slides={slides} />
        <Hero />
        <FeaturedProducts />
        <DealOfTheDay />
        <Testimonials />
      </div>
    </>
  );
};

export default HomePage;
