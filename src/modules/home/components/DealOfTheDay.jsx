import React from "react";
import bg3 from "@assets/media/images/bg_3.jpg";
const DealOfTheDay = () => {
  return (
    <>
      <section
        className="ftco-section3 img bg-cover bg-center py-8 md:py-20 px-2"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <div className="container mx-auto">
          <div className="md:flex md:justify-end">
            <div className="md:w-1/2 md:pl-10">
              <div className="heading-section ftco-animate deal-of-the-day fadeInUp">
                <span className="subheading text-lg md:text-xl block font-serif italic text-green-600 mb-4">
                  Best Price For You
                </span>
                <h2 className="mb-4 text-2xl md:text-4xl">Deal of the day</h2>
                <p className="mb-4">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia
                </p>
                <h3 className="text-xl md:text-3xl mb-2">
                  <a href="#" className="text-green-600 hover:text-green-500">
                    Spinach
                  </a>
                </h3>
                <span className="price text-xl md:text-2xl block">
                  $10{" "}
                  <a href="#" className="text-green-600 hover:text-green-500">
                    now $5 only
                  </a>
                </span>
                <div id="timer" className="flex mt-5 text-4xl">
                  <div className="time text-green-600 font-medium">
                    -1464{" "}
                    <span className="block text-sm text-black">Days</span>
                  </div>
                  <div className="time pl-3 text-green-600 font-medium">
                    19
                    <span className="block text-sm text-black">Hours</span>
                  </div>
                  <div className="time pl-3 text-green-600 font-medium">
                    27
                    <span className="block text-sm text-black">
                      Minutes
                    </span>
                  </div>
                  <div className="time pl-3 text-green-600 font-medium">
                    07
                    <span className="block text-sm text-black">
                      Seconds
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DealOfTheDay;
