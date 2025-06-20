import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const Cart = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        document.body.style.overflow = 'unset';
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  if (!isOpen && !isAnimating) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div 
        className={`fixed right-0 top-0 h-full w-full md:w-[350px] bg-white z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ boxShadow: 'none', borderRadius: 0 }}
      >
        {/* Cart Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
          <span className="uppercase tracking-wide text-[15px] text-gray-500 font-normal pl-0 select-none" style={{letterSpacing: '0.04em'}}>
            MY SHOPPING BAG ( {cartItems.length} )
          </span>
          <button 
            onClick={onClose}
            className="p-1 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="h-full bg-white"></div>
      </div>
    </>
  );
};

export default Cart; 