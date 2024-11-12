import React from 'react'

const  Navbar = () => {
  return (
   <nav className='w-full mt-4 bg-neutral-700 p-2'>
        <div className='flex flex-wrap md:items-center justify-around sm:gap-10 gap-20 md:flex-row sm:flex-col sm:items-start'>

        <div>
            <img className='h-12 rounded-lg w-16' src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" alt="" />
        </div>

        <div className='hidden md:flex items-center justify-center gap-10  font-semibold md:flex-row sm:flex-col sm:items-start'>
            <div className='cursor-pointer'>OUR SOLUTION</div>
            <div className='cursor-pointer'>HOW IT WROKS</div>
            <div className='cursor-pointer'>PRICING</div>
            <div className='cursor-pointer'>BLOG</div>
        </div>

        <div className=' my-auto bg-green-500 rounded-full py-1 px-3 font-semibold md:bg-green-500 md:rounded-full md:py-1 md:px-3 md:font-semibold '>BUY A BUNDLE</div>
        </div>
   </nav>
  )
}

export default Navbar
