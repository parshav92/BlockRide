import React from "react";

const IntWallet = () => {
  return (
    <div className="bg-white w-screen flex flex-col">
      <div className="w-screen bottom-1 h-12 font-semibold border-b-2 flex justify-center items-center">
        <div>BlockRide</div>
      </div>
      <div className="flex flex-col items-center px-10 p-24 gap-12 justify-center">
        <div className="flex flex-col gap-2 md:justify-center items-center">
          <div>
            <img src="Group.png" alt="" />
          </div>
          <div className=" font-medium">Integrate Wallet</div>
          <div className="text-sm w-72 text-center">
            Secure your ride and data by moving transactions onto our blockchain
            chain.
          </div>
        </div>
        <div className="md:w-96 h-64 shadow-lg rounded-2xl">
          <div className="h-10 bottom-1 font-semibold border-b-2 flex justify-center items-center">
            Title
          </div>
          <div className="flex p-2 mt-10 h-full">
            <div className="text-base">
              Revolutionize rides with our blockchain-based system, seamlessly
              integrated with wallets and rewarding users.
            </div>
            <div>
              <img src="phone_info.png" className="w-44 h-14" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntWallet;
