import React from "react";
import ProductCard from "./ProductCard";
import { Products_Data } from "../Data/Products_Data";

const BestSellers = () => {
  const bestSellers = Products_Data.slice(0, 8);

  return (
    <section className="w-full min-h-screen bg-black px-3 md:px-0 py-0 md:py-20  ">
      <div className=" max-w-full  md:w-[75%]  mx-auto">
        <h1 className="text-white text-4xl font-bold text-center mb-16 transform transition-all duration-500 hover:text-amber-400">
          BEST SELLERS
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-6">
          {bestSellers.map((product) => (
            <div 
              key={product.id}
              className="transform transition-all duration-500 hover:-translate-y-2"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;