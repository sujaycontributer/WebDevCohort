import React from 'react'

function DarkMode() {
  return (
    <div className='h-screen bg-white dark:bg-black'>
        <h1 className='text-black dark:text-white'>Hi there </h1>
      <button className='bg-black text-white dark:bg-white dark:text-black' onClick={() => {
        document.querySelector("html").classList.toggle("dark",document.querySelector("html").classList[0] ==  "dark" ? false : true )
      }}>
         click me
      </button>
    </div>
  )
}

export default DarkMode
