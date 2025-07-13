
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  const { image, hoverImage, name, price, isNew, link, colors } = product;

  return (
    <div className="group relative select-none overflow-hidden">
      {/* New Badge */}
      {isNew && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        </div>
      )}

      {/* Image Section - Clickable on Mobile */}
      <Link
        to={link}
        className="block sm:pointer-events-none" 
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          {/* Main Product Image */}
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-contain transition-transform duration-500 ${
              hoverImage ? "group-hover:opacity-0" : "group-hover:scale-105"
            }`}
          />

          {/* Hover Image */}
          {hoverImage && (
            <img
              src={hoverImage}
              alt={`${name} alternate view`}
              className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          )}

          {/* View Product Button - Shows on Hover (Desktop Only) */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-white px-2 py-3 group-hover:translate-y-0 transition-transform duration-300 hidden sm:block">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Handle navigation programmatically if needed
                window.location.href = link;
              }}
              className="block w-full py-2 border border-black text-center text-[12px] font-medium hover:bg-amber-400 transition-colors duration-300"
            >
              VIEW PRODUCT
            </button>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4 flex justify-between  text-center">
        {/* Name - Clickable on Mobile */}
        <Link
          to={link}
          className="sm:pointer-events-none" 
        >
          <h3 className="text-gray-400 text-sm font-medium mb-1 group-hover:text-amber-400 transition-colors duration-300">
            {name}
          </h3>
        </Link>
        <p className="text-amber-400 text-sm font-bold">{price}</p>
      </div>

        {/* Color Options */}
        {colors?.available && colors.options && (
          <div className="flex  gap-2 mt-2">
            {colors.options.map((color, index) => (
              <span
                key={`${color}-${index}`}
                className="w-4 h-4 rounded-full border border-gray-600"
                style={{ backgroundColor: color }}
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
      options: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};

export default ProductCard;