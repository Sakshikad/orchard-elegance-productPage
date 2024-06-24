import React from "react";
import partner from "@assets/media/images/person_1.jpg";

const Testimonials = () => {
  return (
    <>
      <section className="ftco-section testimony-section py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <span className="subheading text-lg md:text-xl block font-serif italic text-green-600 mb-4">
              Testimony
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
              Our satisfied customer says
            </h2>
            <p className="text-gray-600 lg:w-1/2 mx-auto mb-8 lg:mb-10 pl-4 line">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in
            </p>
          </div>
          <div className="relative">
            <div className="overflow-scroll relative">
              <div className={`flex flex-row lg:justify-between -mx-2`}>
                {[...Array(5)].map((_, index) => (
                  <div
                    className="min-w-80 lg:min-w-60 px-2 mb-8 lg:mb-0"
                    key={index}
                  >
                    <div className="testimony-wrap p-4 pb-5">
                      <div
                        className="user-img mb-5 bg-cover bg-center h-24 w-24 lg:h-24 lg:w-24 mx-auto lg:mx-15 rounded-full lg:rounded-full"
                        style={{ backgroundImage: `url(${partner})` }}
                      >
                        <span className="quote flex items-center justify-center">
                          <i className="icon-quote-left"></i>
                        </span>
                      </div>
                      <div className="text text-center">
                        <p className="mb-5 pl-4 line">
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.
                        </p>
                        <p className="name">Garreth Smith</p>
                        <span className="position">UI Designer</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
