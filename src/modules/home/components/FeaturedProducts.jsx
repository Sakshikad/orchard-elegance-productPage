import React from "react";
import ShopCard from "@components/common/ShopCard";
import { products } from "@components/constant";
import { isTouchDevice } from "@components/constant";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
    const hasTouchSupport = isTouchDevice();
  return (
    <>
      <section className="ftco-section2 py-8 md:py-20 pt-28">
        <div className="heading text-center pb-8">
          <div className="ftco-animate fadeInUp">
            <span className="subheading text-lg md:text-xl block font-serif italic text-green-600">
              Featured Products
            </span>
            <h2 className="mb-8 text-2xl md:text-4xl mt-4">Our Products</h2>
            <p className="mb-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-16">
          <div className="mt-8 overflow-x-auto">
            <div
              className={`flex space-x-8 gap-${
                hasTouchSupport ? 4 : 8
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
      </section>
    </>
  );
};

export default FeaturedProducts;
