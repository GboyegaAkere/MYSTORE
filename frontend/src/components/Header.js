import React from 'react'
import { FaShoppingCart, FaUser } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        <a href="/">MYSTORE</a>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-8">
        <a href="/shop" className="text-gray-600 hover:text-gray-900">Shop</a>
        <a href="/on-sale" className="text-gray-600 hover:text-gray-900">On Sale</a>
        <a href="/new-arrivals" className="text-gray-600 hover:text-gray-900">New Arrivals</a>
      </nav>

      {/* Search Input */}
      <div className="flex-grow mx-4 max-w-lg">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Icons */}
      <div className="flex space-x-4 items-center">
        <a href="/cart" className="relative">
          <FaShoppingCart className="text-gray-600 hover:text-gray-900 text-xl" />
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">3</span>
        </a>
        <a href="/profile">
          <FaUser className="text-gray-600 hover:text-gray-900 text-xl" />
        </a>
      </div>
    </div>

    {/* Mobile Navigation */}
    <div className="md:hidden bg-white">
      <div className="container mx-auto flex justify-around py-2">
        <a href="/shop" className="text-gray-600 hover:text-gray-900">Shop</a>
        <a href="/on-sale" className="text-gray-600 hover:text-gray-900">On Sale</a>
        <a href="/new-arrivals" className="text-gray-600 hover:text-gray-900">New Arrivals</a>
      </div>
    </div>
  </header>
  )
}

export default Header