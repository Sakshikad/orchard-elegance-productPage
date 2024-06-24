import React from "react";
import CartItem from "./CartItem";
import product3 from "@assets/media/images/product-3.jpg";
const products = [
  {
    id: 1,
    name: "Bell Pepper",
    price: 4.9,
    image: product3,
    description:
      "Far far away, behind the word mountains, far from the countries",
  },
  {
    id: 2,
    name: "Bell Pepper",
    price: 4.9,
    image: product3,
    description:
      "Far far away, behind the word mountains, far from the countries",
  },
  {
    id: 3,
    name: "Bell Pepper",
    price: 4.9,
    image: product3,
    description:
      "Far far away, behind the word mountains, far from the countries",
  },
  {
    id: 4,
    name: "Bell Pepper",
    price: 4.9,
    image: product3,
    description:
      "Far far away, behind the word mountains, far from the countries",
  },
  {
    id: 5,
    name: "Bell Pepper",
    price: 4.9,
    image: product3,
    description:
      "Far far away, behind the word mountains, far from the countries",
  },
];
const CartList = () => {
  return (
    <>
      <div className="cart-list ">
        <div className="hidden md:flex items-center justify-between border-b border-gray-300 py-4  text-white bg-organicGreen-300 dark:bg-gray-700 dark:text-gray-400 rounded-md">
          <div className="flex items-center w-full">
            <div className="ml-4 mr-2">
              <h3 className="text-lg font-semibold">Product Name</h3>
            </div>
          </div>
          <div className="flex items-center w-full justify-end">
            <span className="mr-8 font-semibold">Price</span>
            <span className="mr-8 font-semibold">Quantity</span>
            <span className="mr-8 font-semibold">Total</span>
          </div>
        </div>
        <div className="overflow-y-auto max-h-72">
          {products.map((product, index) => (
            <CartItem product={product} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CartList;
