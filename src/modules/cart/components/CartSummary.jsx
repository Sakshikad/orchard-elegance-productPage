import React from "react";
import { Link } from "react-router-dom";
import { isTouchDevice } from "@components/constant";

const CartSummary = () => {
    const hasTouchSupport = isTouchDevice();
  return (
    <>
      <div className={`${hasTouchSupport ? "col-span-2" : "col-span-1"}`}>
        <div className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
          <div className="flex flex-col">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>$20.60</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount</span>
              <span>$3.00</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">$17.60</span>
            </div>
          </div>
          <Link to={`/checkout`}>
            <div className="mt-4 flex justify-center">
              <a
                href=""
                className="btn btn-primary inline-block bg-organicGreen-300 border border-gray-300 hover:bg-transparent hover:text-green-500 text-white py-3 px-4 block text-center rounded-full"
              >
                Proceed to Checkout
              </a>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
