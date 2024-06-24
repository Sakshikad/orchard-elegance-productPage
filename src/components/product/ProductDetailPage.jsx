import React, { useEffect } from "react";
import Banner from "../common/Banner";
import bg_1 from "../../assets/Images/bg_1.jpg";
import category2 from "../../assets/media/images/product-1.jpg";
import ShopCard from "../../components/common/ShopCard";
import { Link } from "react-router-dom";
import { products } from "../../components/constant";
import { isTouchDevice } from "../../components/constant";

const ProductDetailPage = () => {
  const hasTouchSupport = isTouchDevice();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner backImg={bg_1} title={"Products Details"} />

      <section class="overflow-hidden bg-white py-11 font-poppins dark:bg-white">
        <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4 md:w-1/2 ">
              <div class="sticky top-0 z-1 overflow-hidden ">
                <div class="relative mb-6 lg:mb-10 lg:h-2/4 ">
                  <img
                    src={category2}
                    alt=""
                    class="object-cover w-full lg:h-full "
                  />
                </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2 ">
              <div class="lg:pl-20">
                <div class="mb-9 ">
                  <h2 class="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                    Bell Pepper
                  </h2>
                  <div class="flex items-center mb-6">
                    <ul class="flex mr-2">
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                    <p class="text-xs dark:text-gray-400 ">
                      (2 customer reviews)
                    </p>
                  </div>
                  <p class="max-w-md mb-8 text-gray-700 dark:text-gray-400 font-poppins bg-white text-base leading-7 font-normal">
                    Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor
                    amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum
                    dor amet Lorem ispum dor amet Lorem ispum dor amet
                  </p>

                  <p class="inline-block  text-2xl font-normal text-gray-700 dark:text-gray-400 ">
                    <span>$1000.99</span>
                    <span class="text-base font-normal text-gray-500 line-through dark:text-gray-400 ml-2">
                      $1500.99
                    </span>
                  </p>
                  <p class="text-green-600 dark:text-green-300  mt-2">
                    7 in stock
                  </p>
                </div>

                <div class="w-full md:w-1/2 mb-2">
                  <div class="relative">
                    <select class="block appearance-none w-full border border-gray-300 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500">
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                      <option>Extra Large</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none px-2 text-gray-700">
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
                <div class="w-40 mb-8">
                  <div class="relative flex  flex-row w-full h-10 mt-4 bg-transparent  focus:outline-none focus:border-gray-500">
                    <button class="w-20 h-full border border-gray-300 rounded text-gray-600 bg-white  outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                      <span class="m-auto text-2xl font-thin">-</span>
                    </button>
                    <input
                      type="number"
                      class="flex items-center ml-2 mr-2 border border-gray-300 w-full rounded font-semibold text-center text-black placeholder-white bg-white outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                      placeholder="1"
                    />
                    <button class="w-20 h-full border border-gray-300 text-gray-600 bg-white rounded outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                      <span class="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>

                <div class="flex flex-wrap  items-center -mx-4 my-0 ">
                  <div class="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                    {/* <button className="btn btn-primary  w-medium  inline-block bg-green-600 border border-gray-300 rounded-full px-6 py-3 mt-4 text-white text-center transition duration-300 ease-in-out hover:bg-transparent hover:text-green-500">
                      Add to Cart
                    </button> */}
                    <Link to={`/cart`}>
                      <button className="btn btn-primary  w-medium  inline-block bg-green-600 border border-gray-300 rounded-full px-6 py-3 mt-4 text-white text-center transition duration-300 ease-in-out hover:bg-transparent hover:text-green-500">
                        Add to Cart
                      </button>
                    </Link>
                  </div>
                  <div class="w-full px-4 mb-4 lg:mb-0 lg:w-1/2 ">
                    <button className="btn btn-primary  w-medium  inline-block bg-green-600 border border-gray-300 rounded-full px-6 py-3 mt-4 text-white text-center transition duration-300 ease-in-out hover:bg-transparent hover:text-green-500">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="ftco-section2 py-8 md:py-20 pt-28">
        <div className="heading text-center pb-8">
          <div className="ftco-animate fadeInUp">
            <span className="subheading text-lg md:text-xl block font-serif italic text-green-600">
              Products
            </span>
            <h2 className="mb-8 text-2xl md:text-4xl mt-4">Related Products</h2>
            <p className="mb-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>

        <div className="container mx-auto px-16">
          <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <ShopCard />
              </Link>
            ))}
          </div>
        </div>
      </section> */}
      <section className="ftco-section2 py-8 md:py-20 pt-10">
        <div className="heading text-center pb-8">
          <div className="ftco-animate fadeInUp">
            <span className="subheading text-lg md:text-xl block font-serif italic text-green-600">
              Products
            </span>
            <h2 className="mb-8 text-2xl md:text-4xl mt-4">Related Products</h2>
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

export default ProductDetailPage;
