"use client";
import React, { useState } from "react";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center text-black focus:outline-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="mr-2">User</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 fill-current"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 12a2 2 0 100-4 2 2 0 000 4zm2-7a2 2 0 11-4 0 2 2 0 014 0zm3 12a1 1 0 01-1 1H6a1 1 0 01-1-1V9a1 1 0 112 0v6h8v-6a1 1 0 112 0v6z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
            Wallet
          </button>
          <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
            Settings
          </button>
          <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
