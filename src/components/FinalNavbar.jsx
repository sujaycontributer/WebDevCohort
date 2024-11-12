import React from 'react'
import home from '../assets/home.svg'

const FinalNavbar = () => {
  return (
   
      
      <div className='bg-black transition-all h-screen delay-1000 w-0 md:w-72 ease-in-out'>
        <div className="flex flex-col p-2 gap-6 ">
        <div className='font-sans flex gap-3 items-center text-xl p-2 dark:text-white text-blue-500 hover:bg-gray-700 hover:rounded-xl'>
          <div className='rounded-lg'>
            <img className='h-[24px] w-[24px]  bg-blue-600 ' src={home} alt="home icon" />
          </div>
          <div>Home</div>

        </div>
        <div className='font-sans text-xl border-gray-900 p-2 text-white hover:bg-gray-800 hover:rounded-xl'>Products</div>
        <div className='font-sans text-xl border-gray-900 p-2 text-white hover:bg-gray-800 hover:rounded-xl'>About</div>
        <div className='font-sans text-xl border-gray-900 p-2 text-white hover:bg-gray-800 hover:rounded-xl'>Term and condition</div>
        <div className='font-sans text-xl border-gray-900 p-2 text-white hover:bg-gray-800 hover:rounded-xl'></div>
        </div>
      </div>

  )
}

export default FinalNavbar
