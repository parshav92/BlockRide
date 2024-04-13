import React from 'react'

const IntWallet = () => {
  return (
   <div className='bg-white w-screen'>
        <div className='w-screen h-14 bottom-1 font-semibold border-b-2 flex justify-center items-center'>
            <div>BlockRide</div>
        </div>
        <div className='flex md:flex-row flex-col px-10 mt-20 justify-between'>
            <div className='flex flex-col gap-2 md:justify-center items-center'>
                <div><img src="Group.png" alt="" /></div>
                <div className=' font-medium'>Integrate Wallet</div>
                <div className='text-sm'>Secure your ride and data by moving transactions onto our blockchain chain.</div>
            </div>
            <div className='md:w-96 h-64 shadow-lg rounded-2xl mt-44'>
                <div className='h-10 bottom-1 font-semibold border-b-2 flex justify-center items-center'>Title</div>
                <div className='flex p-2 mt-10'>
                    <div className='text-sm'>Revolutionize rides with our blockchain-based system, seamlessly integrated with wallets and rewarding users.</div>
                    <div><img src="phone_info.png" className='w-44 h-14' alt="" /></div>
                </div>
                <div className='flex mt-10'>
                    <button className='bg-black text-white w-full h-10 rounded-xl mx-2 mb-2'>Connect to Wallet</button>
                </div>
            </div>
        </div>
   </div>
  )
}

export default IntWallet