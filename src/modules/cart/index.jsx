import React, { useEffect } from "react";
import Banner from "@components/common/Banner";

import bg_1 from "@assets/images/bg_1.jpg";
import CartSummary from "./components/CartSummary";
import ApplyCoupon from "./components/ApplyCoupon";
import CartList from "./components/CartList";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner backImg={bg_1} title={"My Cart"} subtitle={"Home Cart"} />

      <section className="bg-gray-100 py-8 md:py-20 px-4 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="bg-white p-6 shadow-md rounded-md py-8 ">
                <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
                <CartList />
              </div>
            </div>
            <CartSummary />
          </div>
          <ApplyCoupon />
        </div>
      </section>
    </>
  );
};

export default CartPage;
