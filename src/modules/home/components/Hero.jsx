import React from "react";
import freeshippingImg from "@assets/media/icons/free-shipping-white.png";
import fruits from "@assets/media/icons/icons8-fruits-64-white.png";
import bestseller from "@assets/media/icons/icons8-best-seller-64-white.png";
import support from "@assets/media/icons/icons8-24-hours-day-support-100.png";

import category3 from "@assets/media/images/category-3.jpg";
import category1 from "@assets/media/images/category-1.jpg";
import category2 from "@assets/media/images/category-2.jpg";
import category4 from "@assets/media/images/category-4.jpg";

const Hero = () => {
  return (
    <>
      <section className="py-8 md:py-16 mt-16">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex flex-col md:flex-row md:justify-center md:gap-6 lg:gap-12">
            {/* Item 1 */}
            <div className="text-center mb-8 md:mb-0 md:w-1/8">
              <div className="icons bg-purple-300 rounded-full w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mx-auto">
                <span
                  className="bg-no-repeat bg-center  w-8 md:w-14 h-8 md:h-14"
                  style={{
                    backgroundImage: `url(${freeshippingImg})`,
                  }}
                ></span>
              </div>
              <div className="icons-heading mt-2 md:mt-4">
                <h3 className="text-lg font-semibold">Free Shipping</h3>
                <span>On orders over $100</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="text-center mb-8 md:mb-0 md:w-1/8">
              <div className="icons2 bg-yellow-300 rounded-full w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mx-auto">
                <span
                  className="bg-no-repeat bg-center w-10 h-10 md:w-14 md:h-14 inline-block"
                  style={{
                    backgroundImage: `url(${fruits})`,
                  }}
                ></span>
              </div>
              <div className="icons-heading mt-4">
                <h3 className="text-lg font-semibold">Always Fresh</h3>
                <span>Product well packaged</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="text-center mb-8 md:mb-0 md:w-1/8">
              <div className="icons bg-gray-300 rounded-full w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mx-auto">
                <span
                  className="bg-no-repeat bg-center w-10 h-10 md:w-14 md:h-14 inline-block"
                  style={{
                    backgroundImage: `url(${bestseller})`,
                  }}
                ></span>
              </div>
              <div className="icons-heading mt-4">
                <h3 className="text-lg font-semibold">Superior Quality</h3>
                <span>Quality Products</span>
              </div>
            </div>

            {/* Item 4 */}
            <div className="text-center mb-8 md:mb-0 md:w-1/8">
              <div className="icons2 bg-orange-300 rounded-full w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mx-auto">
                <span
                  className="bg-no-repeat bg-center w-10 h-10 md:w-14 md:h-14 inline-block"
                  style={{
                    backgroundImage: `url(${support})`,
                  }}
                ></span>
              </div>
              <div className="icons-heading mt-4">
                <h3 className="text-lg font-semibold">Support</h3>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-16">
          <div className="flex flex-col md:flex-row md:gap-6 lg:gap-12">
            {/* Left Column */}
            <div className="flex-1 md:mr-4">
              {/* Fruits */}
              <div
                className="category-wrap ftco-animate mb-4 fadeInUp bg-cover bg-no-repeat h-48 md:h-64"
                style={{
                  backgroundImage: `url(${category2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="text px-3 py-1">
                  <h2 className="text-lg md:text-xl">
                    <a href="#" className="text-white hover:text-green-500">
                      Fruits
                    </a>
                  </h2>
                </div>
              </div>
              {/* Vegetables */}
              <div
                className="category-wrap ftco-animate fadeInUp bg-cover bg-no-repeat h-48 md:h-64 mb-4"
                style={{
                  backgroundImage: `url(${category1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="text px-5 py-1">
                  <h2 className="text-lg md:text-xl">
                    <a href="#" className="text-white hover:text-green-500">
                      Vegetables
                    </a>
                  </h2>
                </div>
              </div>
            </div>

            {/* Middle Column */}
            <div className="flex-1 md:mx-2 mb-4">
              <div
                className="category-wrap ftco-animate fadeInUp bg-cover bg-no-repeat h-96 md:h-auto"
                style={{
                  backgroundImage: `url(${category1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "529px", // Fixed height for smaller screens
                }}
              >
                <div className="relative text px-3 py-1 text-center text-white flex flex-col justify-start items-center h-full mb-9">
                  <h2 className="text-xl md:text-2xl font-italic font-serif text-green-700">
                    Vegetables
                  </h2>
                  <p className="mt-3 text-black">
                    Protect the health of every home
                  </p>
                  <p className="mt-3 ">
                    <a
                      href="#"
                      className="btn btn-primary inline-block bg-blue-500  rounded-full px-6 py-3 mt-4 text-white text-center transition duration-300 ease-in-out hover:bg-green-500 hover:text-white"
                    >
                      Shop now
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 md:ml-4">
              {/* Juices */}
              <div
                className="category-wrap ftco-animate mb-4 fadeInUp bg-cover bg-no-repeat h-48 md:h-64"
                style={{
                  backgroundImage: `url(${category3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="text px-3 py-1">
                  <h2 className="text-lg md:text-xl">
                    <a href="#" className="text-white hover:text-green-500">
                      Juices
                    </a>
                  </h2>
                </div>
              </div>
              {/* Dried */}
              <div
                className="category-wrap ftco-animate fadeInUp bg-cover bg-no-repeat h-48 md:h-64"
                style={{
                  backgroundImage: `url(${category4})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="text px-3 py-1">
                  <h2 className="text-lg md:text-xl">
                    <a href="#" className="text-white hover:text-green-500">
                      Dried
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
