import React from 'react'

function Practice() {
  return (
    <div className='flex rel'>
      <div className='bg-black transition-all h-screen delay-1000 w-0 md:w-72 ease-in-out'>
        <div className="flex flex-col p-2 gap-6 ">
        <div className='font-sans  text-xl p-2 dark:text-white text-red-500 hover:bg-gray-700 hover:rounded-xl'>Home</div>
        <div className='font-sans text-xl border-gray-900 p-2 text-white hover:bg-gray-800 hover:rounded-xl'>Products</div>
        <div className='font-sans text-xl border-gray-900 p-2 text-white hover:bg-gray-800 hover:rounded-xl'>About</div>
        <div className='font-sans text-xl border-gray-900 p-2 text-white hover:bg-gray-800 hover:rounded-xl'>Term and condition</div>
        <div className='font-sans text-xl border-gray-900 p-2 text-white hover:bg-gray-800 hover:rounded-xl'></div>
        </div>
      </div>
      <div className='bg-green-500 flex-1 w-full '>
        Content
      </div>
    </div>
  )
}

export default Practice
