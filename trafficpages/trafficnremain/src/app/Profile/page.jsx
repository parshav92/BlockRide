import React from "react";
import { IoSearch } from "react-icons/io5";
import { PiWallet } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { LuMessageSquare } from "react-icons/lu";
import { GrTrophy } from "react-icons/gr";
import { CiStar } from "react-icons/ci";
import { RiLogoutBoxRLine } from "react-icons/ri";
const page = () => {
  return (
    <>
      <div className="bg-white w-screen h-screen">
        <div className="flex flex-col px-4">
        <div className="flex flex-col p-10">
          <div className="flex w-screen items-center">
            <img className="w-20 h-20 md:w-16 md:h-16" src="Normal.png" alt="" />
            <div className="text-black m-4 text-2xl md:text-lg">
              Beverly Tammy Richards-Phillips
            </div>
          </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-0  md:px-10 md:justify-between justify-center">
          <div>
            <div className="flex bg-gray-100  w-80  mx-6 h-10 items-center p-4 rounded-xl">
              <div>
                <IoSearch className=" w-6 h-6" />
              </div>
              <input
                className="bg-gray-100 px-2"
                type="text"
                placeholder="0000000"
              />
            </div>
            <div className="flex bg-gray-100  w-80 mt-4 mx-6 h-10 items-center p-4 rounded-xl">
              <div>
                <PiWallet className="w-5 h-5" />
              </div>
              <div className="px-2 text-base">Check Wallet</div>
            </div>
            <div className="flex bg-gray-100 w-80 mt-4 mx-6 h-10 items-center p-4 rounded-xl">
              <div>
                <LuMessageSquare className="w-5 h-5" />
              </div>
              <div className="px-2 text-base">Messages</div>
            </div>
            <div className="flex bg-gray-100  w-80 mt-4 mx-6 h-10 items-center p-4 rounded-xl">
              <div>
                <VscAccount className="w-5 h-5" />
              </div>
              <div className="px-2 text-base">Manage Account</div>
            </div>
            <div className="flex bg-gray-100 w-80 mt-4 mx-6 h-10 items-center p-4 rounded-xl">
              <div>
                <GrTrophy className="w-5 h-5" />
              </div>
              <div className="px-2 text-base">Rewards</div>
            </div>
            <div className="flex bg-gray-100  w-80 mt-4 mx-6 h-10 items-center p-4 rounded-xl">
              <div>
                <CiStar className="w-6 h-6" />
              </div>
              <div className="px-1 text-base">Your Reviews</div>
            </div>
          </div>
          <div className="flex flex-col  ml-6 md:ml-0">
                <div className="bg-gray-100 w-full h-10 rounded-xl p-2 text-base px-4">
                    Opt in for Rewards
                </div>
                <div className="flex flex-col md:flex-row">
                    <div><img src="Message_card.png" alt="" /></div>
                    <div><img src="Message_card.png" alt="" /></div>
                    
                </div>

                
          </div>
          </div>
          <div className="md:flex flex-col md:flex-row justify-evenly md:p-10 ml-6 md:0 hidden ">
                <div><img src="Message_card.png" alt="" /></div>
                <div><img src="Message_card.png" alt="" /></div>
                <div><img src="Message_card.png" alt="" /></div>
                <div><img src="Message_card.png" alt="" /></div>
          </div>
          <div className="flex gap-2 p-10">
            <div><RiLogoutBoxRLine className="w-7 h-7"/></div>
            <div className="text-xl"> Logout</div>
          </div>
          </div>
      </div>
    </>
  );
};

export default page;
