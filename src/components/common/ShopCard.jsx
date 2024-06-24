import React from "react";
import productImg from "../../assets/Images/product-1.jpg";
const ShopCard = () => {
  return (
    <>
      <div className="group border border-gray-200 text-sm overflow-hidden">
        <a href="#" className="relative block overflow-hidden">
          <img
            className="group-hover:scale-125 transition-all"
            src={productImg}
            alt="Colorlib Template"
          />
          <span className="absolute top-0 left-0 bg-organicGreen-100 p-2 text-white">
            -30%
          </span>
        </a>
        <div className="mt-4 py-3 pb-4 px-3 text-center">
          <h3>
            <a href="#">Bell Pepper</a>
          </h3>
          <div className="flex justify-center group-hover:opacity-0">
            <div>
              <p className="text-organicGreen-100">
                <span className="line-through mr-1 text-gray-400">$120.00</span>
                <span className="price-sale">$ 80.00</span>
              </p>
            </div>
          </div>
          <div className="bottom-area flex px-3 opacity-0 group-hover:opacity-100 -translate-y-4">
            <div className="m-auto flex">
              <a
                href="#"
                className="add-to-cart flex justify-center items-center text-center w-10 h-10 rounded-full bg-organicGreen-100 text-white text-lg"
              >
                <ion-icon name="menu-outline"></ion-icon>
              </a>
              <a
                href="#"
                className="buy-now flex justify-center items-center mx-1 w-10 h-10 rounded-full bg-organicGreen-100 text-white text-lg"
              >
                <ion-icon name="cart-outline"></ion-icon>
              </a>
              <a
                href="#"
                className="heart flex justify-center items-center w-10 h-10 rounded-full bg-organicGreen-100 text-white text-lg"
              >
                <ion-icon name="heart"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCard;
