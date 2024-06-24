import React from "react";
import { Link } from "react-router-dom";

import ShopCard from "@components/common/ShopCard";
import { products } from "@components/constant";
import { isTouchDevice } from "@components/constant";

const FilterOptions = ["All", "Vegetables", "Fruits", "Juice", "Dried"];

const ProductList = () => {
  const [filter, setFilter] = React.useState("All");
  const hasTouchSupport = isTouchDevice();
  const editFilter = (val) => {
    setFilter(val);
  };
  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-14 pb-10">
        <div className="container mx-auto px-1">
          <div className="flex justify-center gap-1 px-26 ">
            {FilterOptions.map((option, index) => (
              <div
                key={index}
                className={`py-1 px-4 rounded cursor-pointer ${
                  filter === option
                    ? "text-white bg-organicGreen-100"
                    : "text-organicGreen-100"
                } `}
                onClick={() => editFilter(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="container mx-auto px-4 md:px-20">
            <div className="mt-8 overflow-x-auto">
              <div
                className={`flex space-x-8 ${
                  hasTouchSupport ? "gap-4" : "gap-8"
                } md:space-x-0 md:grid md:grid-cols-2 lg:grid-cols-4`}
              >
                {products.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`}>
                    <ShopCard />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 pt-12 pb-12 ">
          <div className="col text-center">
            <div className="block-27">
              <ul className="flex justify-center space-x-1">
                <li>
                  <a
                    href="#"
                    className="border flex font-Open Sans justify-center items-center w-9 h-9 rounded-full  text-black text-base"
                  >
                    &lt;
                  </a>
                </li>
                <li className="active">
                  <span className="border flex font-Open Sans  justify-center items-center w-9 h-9 rounded-full bg-organicGreen-100 text-white text-base">
                    1
                  </span>
                </li>
                <li>
                  <a
                    href="#"
                    className="border font-Open Sans flex justify-center items-center w-9 h-9 rounded-full  text-black text-base"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="border flex font-Open Sans justify-center items-center w-9 h-9 rounded-full  text-black text-base"
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="border flex font-Open Sans justify-center items-center w-9 h-9 rounded-full  text-black text-base"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="border flex font-Open Sans justify-center items-center w-9 h-9 rounded-full  text-black text-base"
                  >
                    5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="border flex font-Open Sans justify-center items-center w-9 h-9 rounded-full  text-black text-base"
                  >
                    &gt;
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
