import React from "react";

const CartItem = ({ index, product }) => {
  return (
    <>
      <div
        key={index}
        className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-300 py-4"
      >
        <div className="flex items-center md:flex-shrink-0 md:w-7/12 xl:w-8/12">
          <button class="text-red-500 hover:bg-organicGreen-300 hover:text-white border border-gray-300 rounded-full">
            <svg
              class="w-4 h-4"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <img
            src={product.image}
            alt="Product Image"
            className="w-16 h-16 object-cover ml-4"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">
              {product.name}
              <span className="md:hidden font-semibold">
                (${product.price})
              </span>
            </h3>
            <p className="text-sm text-gray-500">{product.description}</p>
          </div>
        </div>
        <div className="flex items-center w-full justify-between md:block md:ml-5 lg:ml-0">
          <span className="hidden md:inline-block mr-4 font-semibold">
            ${product.price}
          </span>
          <div className="inline-block py-1 border border-gray-300 text-center rounded-md">
            <button className="h-4">
              <ion-icon name="remove-outline"></ion-icon>
            </button>
            <input
              type="number"
              name={`quantity${index}`}
              className="w-12 py-1 text-center"
              value="1"
              min="1"
              max="100"
            />
            <button className="h-4">
              <ion-icon name="add-outline"></ion-icon>
            </button>
          </div>

          <span className="ml-4 font-semibold">
            <span className="font-bold">Total:</span>${product.price}
          </span>
        </div>
      </div>
    </>
  );
};

export default CartItem;
