
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { Products_Data } from "../Data/Products_Data";

const Suggestion = () => {
  const getProductsToShow = () => {
    const width = window.innerWidth;
    if (width < 640) return 1; // Mobile
    if (width < 1024) return 2; // Tablet
    return 4;
  };

  const [productsToShow, setProductsToShow] = useState(getProductsToShow());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setProductsToShow(getProductsToShow());
      setCurrentIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const maxIndex = Products_Data.length - productsToShow;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const maxIndex = Products_Data.length - productsToShow;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const time = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(time);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="w-full relative overflow-hidden py-8 ">
      <div className="max-w-[100%]  relative">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-4 top-2/5 transform -translate-y-1/2 bg-black/20 hover:bg-yellow-300 text-gray-700 py-3  transition-all duration-200 hover:scale-110 z-10 disabled:opacity-50"
          aria-label="Previous products"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Products Container with Overflow Hidden */}
        <div className="overflow-hidden mx-16">
          {/* Products Slider */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / productsToShow}%)`,
              width: `${(Products_Data.length * 100) / productsToShow}%`
            }}
          >
            {Products_Data.map((product, index) => (
              <div
                key={product.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / Products_Data.length}%` }}
              >
                <div className="transform transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                  <ProductCard product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-4 top-2/5 transform -translate-y-1/2 bg-black/20 hover:bg-yellow-300 text-gray-700  py-3  transition-all duration-200 hover:scale-110 z-10 disabled:opacity-50"
          aria-label="Next products"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default Suggestion;