import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });
  const [cartCount, setCartCount] = useState(() => {
    const stored = localStorage.getItem("cartCount");
    return stored ? parseInt(stored, 10) : 0;
  });

  // Listen for storage events (e.g. if cartCount or cartItems are updated elsewhere)
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === "cartCount") {
         setCartCount(parseInt(e.newValue, 10) || 0);
      } else if (e.key === "cartItems") {
         setCartItems(JSON.parse(e.newValue || "[]"));
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => { window.removeEventListener("storage", handleStorage); };
  }, []);

  // (Demo) "Add to Cart" button increments cartCount and adds a dummy item (if not already present) to cartItems.
  const addToCart = () => {
    const newCount = cartCount + 1;
    setCartCount(newCount);
    localStorage.setItem("cartCount", newCount.toString());
    const dummyItem = { id: 1, name: "Dummy Item", price: 10, quantity: 1 };
    const newItems = cartItems.some(item => item.id === dummyItem.id) ? cartItems : [...cartItems, dummyItem];
    setCartItems(newItems);
    localStorage.setItem("cartItems", JSON.stringify(newItems));
  };

  // (Demo) "Remove" button decrements cartCount (if > 0) and removes the dummy item (if present) from cartItems.
  const removeFromCart = () => {
    if (cartCount > 0) {
      const newCount = cartCount - 1;
      setCartCount(newCount);
      localStorage.setItem("cartCount", newCount.toString());
      const newItems = cartItems.filter(item => item.id !== 1);
      setCartItems(newItems);
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    }
  };

  // (Demo) "Clear Cart" button resets cartCount and cartItems.
  const clearCart = () => {
    setCartCount(0);
    localStorage.setItem("cartCount", "0");
    setCartItems([]);
    localStorage.setItem("cartItems", "[]");
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <p>Cart Count (from localStorage): {cartCount}</p>
      <p>Cart Items (from localStorage): {JSON.stringify(cartItems)}</p>
      <div className="mt-4 flex gap-2">
        <button onClick={addToCart} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Add to Cart</button>
        <button onClick={removeFromCart} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Remove</button>
        <button onClick={clearCart} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart; 