import React from "react";

const ApplyCoupon = () => {
  return (
    <>
      <div className="mt-8 bg-white p-6 shadow-md rounded-md">
        <h2 className="text-xl font-bold mb-4">Coupon Code</h2>
        <p className="text-sm mb-4">Enter your coupon code if you have one</p>
        <form action="#" className="mb-4">
          <div className="flex">
            <input
              type="text"
              className="w-full border border-gray-300 py-1 px-3"
              placeholder="Coupon code"
            />
            <button
              type="submit"
              className="btn btn-primary inline-block bg-organicGreen-300 border border-gray-300 hover:bg-transparent hover:text-green-500 text-white py-2 px-4 ml-2 rounded-full"
            >
              Apply Coupon
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ApplyCoupon;
