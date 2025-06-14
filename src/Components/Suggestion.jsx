import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Products_Data } from '../Data/Products_Data';

const Suggestion = () => {
  const getProductsToShow = () => {
    const width = window.innerWidth;
    if (width < 640) return 1;    // Mobile
    if (width < 1024) return 2;   // Tablet
    return 4;                     // Desktop
  };

  const [productsToShow, setProductsToShow] = useState(getProductsToShow());
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setProductsToShow(getProductsToShow());
      setCurrentIndex(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    const maxIndex = Products_Data.length - productsToShow;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = Products_Data.length - productsToShow;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="w-full relative">
      <div className="max-w-[100%] container mx-auto relative">        
        {/* Left Arrow */}
        <button 
          onClick={prevSlide} 
className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-yellow-300 text-gray-700  py-2  transition-all duration-200 hover:scale-110 z-10"
          aria-label="Previous products"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {Products_Data.slice(currentIndex, currentIndex + productsToShow).map((product) => (
            <div 
              key={product.id}
              className="transform transition-all duration-500 hover:-translate-y-2"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide} 
         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-yellow-300 text-gray-700  py-2  transition-all duration-200 hover:scale-110 z-10"
          aria-label="Next products"
        >
          <ChevronRight size={32} />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center mt-8 gap-2">
          {Array.from({ length: Math.ceil(Products_Data.length / productsToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * productsToShow)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index * productsToShow 
                  ? 'bg-amber-400 scale-125' 
                  : ' hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Suggestion;
