import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const { 
    image, 
    hoverImage, 
    name, 
    price, 
    isNew, 
    link, 
    colors 
  } = product;

  return (
    <div className=" overflow-hidden w-full  group relative select-none">
      {/* New Badge */}
      {isNew && (
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
            src={image}
            alt={name}
            className={`w-full object-contain transition-all duration-500 ease-in-out ${
              hoverImage ? 'group-hover:transform group-hover:translate-x-full group-hover:opacity-0' 
                        : 'group-hover:scale-105'
            }`}
          />
          
          {hoverImage && (
            <img
              src={hoverImage}
              alt={`${name} - Hover`}
              className="w-full object-contain absolute inset-0 transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out group-hover:scale-105"
            />
          )}
        </div>

        {/* Product Info Overlay */}
        <div className="absolute bottom-0 right-0 left-0">
          <div className="transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-100">
            <div className="w-full py-3 px-4 bg-white backdrop-blur-sm">
              <Link
                to={link}
                className="block w-full text-center py-1 bg-transparent border border-black text-black font-semibold hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300 transform"
              >
                VIEW PRODUCT
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product Name and Price */}
      <div className="flex my-3 justify-between px-4 items-center transform transition-all duration-300 group-hover:translate-y-1">
        <h3 className="text-white font-semibold     text-sm leading-tight group-hover:text-amber-400 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-amber-400 font-bold text-sm transform transition-all duration-300 group-hover:scale-110">
          {price}
        </p>
      </div>

      {/* Product Colors */}
      {colors?.available && colors.options && (
        <div className="flex justify-start px-4 mb-3 gap-2 transform transition-all duration-300 group-hover:translate-x-1">
          {colors.options.map((color, index) => (
            <span
              key={`${color}-${index}`}
              className="w-4 h-4 rounded-full border-2 border-white transform transition-all duration-300 hover:scale-125 cursor-pointer shadow-md"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    hoverImage: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    isNew: PropTypes.bool,
    link: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    colors: PropTypes.shape({
      available: PropTypes.bool.isRequired,
      options: PropTypes.arrayOf(PropTypes.string)
    })
  }).isRequired
};

export default ProductCard;
