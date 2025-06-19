import React, { useState, useEffect } from 'react';
import { X, Search as SearchIcon } from 'lucide-react';

const SearchComp = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
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

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Implement search logic here
      console.log('Searching for:', searchTerm);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Search Panel */}
      <div 
        className={`fixed right-0 top-0 h-full w-full md:w-96 bg-white z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Search panel"
      >
        {/* Search Header */}
        <div className="px-6 py-4">
          <div className="flex justify-center items-center gap-3">
            <SearchIcon className="w-8 h-8 text-gray-400" aria-hidden="true" />
            <input
              type="text"
              className="flex-1 outline-none text-gray-700 border-b-2 border-black py-2 placeholder-gray-400 bg-transparent text-base"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
              aria-label="Search products"
            />
            
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <button
              className="text-gray-500 font-medium hover:text-gray-700 transition-colors"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="text-black font-bold hover:text-amber-500 transition-colors"
              onClick={handleSearch}
            >
              OK
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default SearchComp;