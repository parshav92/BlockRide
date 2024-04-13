import React from "react";

const Menu = () => {
  return (
    <div>
      <div className="flex flex-col max-w-[450px] ml-8 mt-32 space-y-1 text-sm">
        <div className="bg-gray-100 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors duration-200 cursor-pointer">
          Check Wallet
        </div>
        <div className="bg-gray-100 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors duration-200 cursor-pointer">
          Messages
        </div>
        <div className="bg-gray-100 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors duration-200 cursor-pointer">
          Manage Account
        </div>
        <div className="bg-gray-100 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors duration-200 cursor-pointer">
          Rewards
        </div>
        <div className="bg-gray-100 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors duration-200 cursor-pointer">
          Your Reviews
        </div>
      </div>
    </div>
  );
};

export default Menu;
