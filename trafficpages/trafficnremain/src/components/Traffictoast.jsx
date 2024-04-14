import React from 'react'

const Traffictoast = () => {
  return (
    <div className=' flex justify-center backdrop-blur-xl '>
        <div className='backdrop-blur-xl border-1 border-black bg-white w-64  rounded-xl'>
            <div className='text-black p-4 font-semibold'>
                Any Traffic Updates?
            </div>
            <div className='text-black px-4 text-sm '>
                Is there traffic on the route you currently are?
            </div>
            <div className='flex p-4 justify-end gap-3 items-center text-sm font-medium'>
                <div>
                    <button className='text-black'>Cancel</button>
                </div>
                <div>
                    <button className='bg-black text-white w-14 h-10 rounded-xl'>Yes</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Traffictoast