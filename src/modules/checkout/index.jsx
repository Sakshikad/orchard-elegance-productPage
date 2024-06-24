import React, { useEffect } from "react";
import Banner from "@components/common/Banner";
import bg_1 from "../../assets/Images/bg_1.jpg";
const CheckOutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner backImg={bg_1} title={"CheckOut"} subtitle={"Home CheckOut"} />
      <section className="ftco-section py-16">
        <div className="container mx-auto">
          <div className="lg:flex justify-center">
            <div className="lg:w-2/3 xl:w-2/3 p-6 bg-white ">
              <form action="#" className="billing-form">
                <h3 className="text-2xl font-semibold mb-6 billing-heading text-center">
                  Billing Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="">
                    <label htmlFor="firstname" className="text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-input block appearance-none w-full border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                      placeholder="Robert "
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="lastname" className="text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-input block appearance-none w-full border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                      placeholder="Downey"
                    />
                  </div>
                </div>
                <div class="w-full py-1">
                  <div class="relative">
                    <label htmlFor="State" className="text-gray-700">
                      State
                    </label>
                    <select class="block appearance-none w-full border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500">
                      <option>Maharashtra</option>
                      <option>Delhi</option>
                      <option>Mumbai</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none px-2 text-gray-700 mt-6">
                      <svg
                        className="w-2.5 h-2.5 ms-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 py-4">
                  <div className="">
                    <label htmlFor=" StreetAddress" className="text-gray-700">
                      Street Address
                    </label>
                    <div className="flex justify-between gap-6">
                      <input
                        type="text"
                        className="form-input block appearance-none w-full border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                        placeholder="House number and street name"
                      />
                      <input
                        type="text"
                        className="form-input block appearance-none w-full border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                        placeholder="Address line-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                  <div className="">
                    <label htmlFor="City" className="text-gray-700">
                      Town / City
                    </label>
                    <input
                      type="text"
                      className="form-input block appearance-none w-full border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="lastname"
                      className="text-gray-700"
                      required
                    >
                      Post Code / Zip
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-input block appearance-none w-full border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="lastname" className="text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-input block appearance-none w-full border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                      placeholder=""
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="lastname" className="text-gray-700">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-input block appearance-none w-full border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-evenly items-center ">
                  <div className="flex items-center ">
                    <input type="radio" className="mr-2" />
                    <label className="text-lg">Create an Account?</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" className=" mr-2" />
                    <label className="text-lg">
                      Ship to a Different Address
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="lg:w-1/3 xl:w-1/3 p-6 bg-white text-black py-14">
              <div className="mb-6 ">
                <div className="bg-white p-6 border border-gray-300 shadow-md rounded-md">
                  <h2 class="text-xl font-bold mb-4">Cart Totals</h2>
                  <div class="flex flex-col">
                    <div class="flex justify-between mb-2">
                      <span>Subtotal</span>
                      <span>$20.60</span>
                    </div>
                    <div class="flex justify-between mb-2">
                      <span>Delivery</span>
                      <span>$0.00</span>
                    </div>
                    <div class="flex justify-between mb-2">
                      <span>Discount</span>
                      <span>$3.00</span>
                    </div>
                    <hr class="my-2" />
                    <div class="flex justify-between">
                      <span class="font-semibold">Total</span>
                      <span class="font-semibold">$17.60</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-2 bg-white p-6  border border-gray-300 shadow-md rounded-md">
                  <h3 className="text-2xl font-semibold mb-4 billing-heading">
                    Payment Method
                  </h3>
                  <div className="mb-4">
                    <div className="flex items-center">
                      <input type="radio" name="optradio" className="mr-2" />
                      <label className="text-lg">Direct Bank Transfer</label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center">
                      <input type="radio" name="optradio" className="mr-2" />
                      <label className="text-lg">Check Payment</label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center">
                      <input type="radio" name="optradio" className="mr-2" />
                      <label className="text-lg">Paypal</label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <label className="text-sm">
                        I have read and accept the terms and conditions
                      </label>
                    </div>
                  </div>
                  <div class="mt-4 flex justify-center">
                    <button className="btn btn-primary inline-block bg-organicGreen-300 border border-gray-300 hover:bg-transparent hover:text-green-500 text-white py-3 px-4 block text-center rounded-full">
                      Place an order
                    </button>
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

export default CheckOutPage;
