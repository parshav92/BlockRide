import React from 'react'

const Rewards = () => {
  return (
   <>
    <div className='w-screen h-14 bottom-1 font-semibold border-b-2 flex justify-center items-center'>
            <div>Rewards</div>
        </div>
        <div className='flex flex-col gap-8'>
        <div className='flex justify-center items-center h-full mt-10'><img src="Enabled.png" className='w-64 md:w-auto' alt="" /></div>
        <div className='text-black flex justify-center items-center'>
        <input type="checkbox" id="myCheckbox" className='bg-black w-3 h-3 m-2' name="myCheckbox" check/>
        <label for="myCheckbox">I agree to the terms and conditions.</label>
        </div>
    <a href='/driverprofile'>   <div className='justify-center flex'><button className='bg-black text-white w-72 h-10 rounded-md'>Save</button></div></a> 
        </div>
   </>
  )
}

export default Rewards