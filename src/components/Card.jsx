import React from 'react'

function Card() {
  return (
    <div className='bg-neutral-700 md:max-w-2xl m-5 mx-auto rounded-xl'>
      <div className="flex flex-col items-center justify-center md:flex-row ">
        <div className='md:shrink-0 px-2'>
          <img className='h-full w-full object-cover md:h-[300px] md:w-[300px]' src="https://www.shutterstock.com/image-photo/handsome-young-man-casual-wear-260nw-2257856767.jpg" alt="" />
        </div>
        <div className='p-6'>
          <p className='text-xl text-indigo-500 font-semibold'>Hi there, myself sujay</p>
          <span className='text-neutral-300'> I am a fullstack developer , learning enthusiast </span>
        </div>
      </div>
    </div>
  )
}

export default Card
