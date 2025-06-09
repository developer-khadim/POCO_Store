import React from "react";
import { Link } from "react-router-dom";
import product1 from "../assets/Products/POCOF7UltraBlack.png";
import Product2 from "../assets/Products/PocoX7.png";
import Product2_hovering_IMG from "../assets/Products/Poco_x7_2.png";
import Product4 from '../assets/Products/c75.png'
import Product4_hovering_IMG from '../assets/Products/c75_2.webp'
import Product5 from '../assets/Products/c86.webp'
import Product6 from '../assets/Products/m6pro.webp'
import Product6_hovering_img from '../assets/Products/m6pro_2.webp'
import product7 from '../assets/Products/poco_pad.webp'
import Product7_hovering from '../assets/Products/Poco_pad_2.webp'
import Product8 from '../assets/Products/f6.webp'
import Product8_hovering from '../assets/Products/f6_2.webp'

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-lg overflow-hidden w-full shadow-lg hover:shadow-2xl transition-all duration-500 group relative select-none ">
      {/* New Badge */}
      {product.isNew && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded transform transition-all duration-300 group-hover:scale-110">
            NEW
          </span>
        </div>
      )}

      {/* Product Image Container */}
      <div className="relative overflow-hidden">
        <div className="relative h-90 flex items-center justify-center">
          {/* Main Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className={`w-full object-contain transition-all duration-500 ease-in-out ${
              product.hoverImage && product.hoverImage !== product.image 
                ? 'group-hover:transform group-hover:translate-x-full group-hover:opacity-0' 
                : 'group-hover:scale-105'
            }`}
          />
          
          {product.hoverImage && product.hoverImage !== product.image && (
            <img
              src={product.hoverImage}
              alt={`${product.name} - Hover`}
              className="w-full object-contain absolute inset-0 transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:scale-105"
            />
          )}
        </div>

        {/* Product Info Overlay */}
        <div className="absolute bottom-0 right-0 left-0">
          {/* View Product Button - Slides up on hover */}
          <div className="transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-100">
            <div className="w-full py-3 px-4 bg-white backdrop-blur-sm">
              <Link
                to={product.link || "#"}
                className="block w-full text-center py-1 bg-transparent border border-black text-black font-semibold hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300  transform "
              >
                VIEW PRODUCT
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product Name and Price */}
      <div className="flex my-3 justify-between px-4 items-center transform transition-all duration-300 group-hover:translate-y-1">
        <h3 className="text-white font-semibold text-sm leading-tight group-hover:text-amber-400 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-amber-400 font-bold text-sm transform transition-all duration-300 group-hover:scale-110">
          {product.price}
        </p>
      </div>

      {/* Products Colors */}
      {product.ishavingcolors && (
        <div className="flex justify-start px-4 mb-3 gap-2 transform transition-all duration-300 group-hover:translate-x-1">
          {product.color1 && (
            <span
              className="w-4 h-4 rounded-full border-2 border-white transform transition-all duration-300 hover:scale-125 cursor-pointer shadow-md"
              style={{ backgroundColor: product.color1 }}
              title={product.color1}
            />
          )}
          {product.color2 && (
            <span
              className="w-4 h-4 rounded-full border-2 border-white transform transition-all duration-300 hover:scale-125 cursor-pointer shadow-md"
              style={{ backgroundColor: product.color2 }}
              title={product.color2}
            />
          )}
          {product.color3 && (
            <span
              className="w-4 h-4 rounded-full border-2 border-white transform transition-all duration-300 hover:scale-125 cursor-pointer shadow-md"
              style={{ backgroundColor: product.color3 }}
              title={product.color3}
            />
          )}
        </div>
      )}
    </div>
  );
};

const BestSellers = () => {
  const products = [
    {
      id: 1,
      image: product1,
      name: "POCO F7 Ultra(16GB-512GB)",
      price: "Rs.259,999",
      isNew: true,
      link: "/poco-f7-ultra",
    },
    {
      id: 2,
      image: product1,
      name: "POCO F7 Ultra(12GB-512GB)",
      price: "Rs.259,999",
      isNew: true,
      link: "/poco-f7-ultra",
    },
    {
      id: 3,
      image: Product2,
      hoverImage: Product2_hovering_IMG, 
      name: "POCO X7 Pro 5G(16GB-512GB)",
      price: "Rs.139,999",
      ishavingcolors: true,
      color1: "black",
      color2: "green",
      color3: "yellow",
      isNew: true,
      link: "/poco-f7-ultra",
    },
    {
      id: 4,
      image: Product4,
      hoverImage: Product4_hovering_IMG,
      name: "POCO F7 Ultra(8GB-256GB)",
      price: "Rs.36,999",
      isNew: true,
      link: "/poco-f7-ultra",
      ishavingcolors: true,
      color1: "black",
      color2: "green",
    },
    {
      id: 5,
      image: Product5,
      name: "POCO C65 (6GB-128GB)",
      price: "Rs.35,999",
      isNew: true,
      link: "/poco-f7-ultra",
      ishavingcolors: true,
      color1: "black",
      color2: "lightblue",
      color3: "pink"
    },
    {
      id: 6,
      image: Product6,
      hoverImage: Product6_hovering_img,
      name: "POCO M6 Pro",
      price: "Rs.79,999",
      isNew: true,
      link: "/poco-f7-ultra",
      ishavingcolors: true,
      color1: "black",
      color2: "pink",
      color3: "lightblue"
    },
    {
      id: 7,
      image: product7,
      hoverImage: Product7_hovering,
      name: "POCO Pad(8GB-256GB)",
      price: "Rs.92,999",
      isNew: true,
      link: "/poco-f7-ultra",
      ishavingcolors: true,
      color1: "black",
      color2: "lightblue",
    },
    {
      id: 8,
      image: Product8,
      hoverImage: Product8_hovering,
      name: "POCO F6 (12GB-512GB)",
      price: "Rs.144,999",
      isNew: true,
      link: "/poco-f7-ultra",
      ishavingcolors: true,
      color1: "black",
      color2: "green",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-black py-0 md:py-20">
      <div className="max-w-[75%] mx-auto">
        <h1 className="text-white text-4xl font-bold text-center mb-16 transform transition-all duration-500 hover:text-amber-400">
          BEST SELLERS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="transform transition-all duration-500 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
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