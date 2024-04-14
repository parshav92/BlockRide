'use client'
import Image from 'next/image'
// import avatar from '../temp/avatar.jpg'
import { BsPerson } from 'react-icons/bs'
// import { useContext } from 'react'
// import { UberContext } from '../context/uberContext'

const style = {
  wrapper: `h-16 w-screen bg-black text-white flex md:justify-around items-center fixed z-20`,
  leftMenu: `flex gap-3`,
  logo: `text-3xl text-white flex cursor-pointer mr-auto`,
  menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-3 items-center`,
  userImageContainer: `mr-2`,
  userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
  loginText: `ml-2`,
}

const Navbar = () => {
//   const { currentAccount, connectWallet, currentUser ,logout  } = useContext(UberContext)

  return (
    // <div className={style.wrapper}>
    //   <div className={style.leftMenu}>
    //     <div className={style.logo}>BlockRide</div>
    //     <div className={style.menuItem}>Ride</div>
    //     <div className={style.menuItem}>Drive</div>
    //     <div className={style.menuItem}>More</div>
    //   </div>
    //   <div className={style.rightMenu}>
    //     <div className={style.menuItem}>Help</div>
        // <div className='flex flex-row ml-auto gap-8'>
        //   <div className="">{currentUser?.name?.split(' ')[0]}</div>
        //     <Image
        //       className={style.userImage}
        //       src={avatar}
        //       width={40}
        //       height={40}
        //     />
        //   </div>
        //   {currentAccount ? (
        //     <div>
        //       {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
        //       <button className='ml-10' onClick={logout}>Logout</button>
        //     </div>
        //   ) : (
        //     <div className={style.loginButton} onClick={() => connectWallet()}>
        //       <BsPerson />
        //       <span className={style.loginText}>Log in</span>
        //     </div>
        //   )}
        // </div>
    // </div>

    <div className='bg-black w-[150%] lg:w-full p-4 flex md:flex-row justify-around'> 
      <div className='text-gray-200 font-semibold text-2xl'>
        BlockRide
      </div>
      <div className='flex flex-row ml-auto'>
          </div>
          <a href="/history">
            <div className="text-white flex flex-row gap-2 mr-4 bg-stone-800 px-4 rounded-xl py-2" onClick={() => connectWallet()}>
              <BsPerson className='mt-0.5 h-5 w-5' />
              <span className="text-base font-semibold"></span>
            </div></a>
          
           <div className=""></div>
          
    </div>
  )
}

export default Navbar
