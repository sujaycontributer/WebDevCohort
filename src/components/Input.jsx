import React from 'react'

export const Input = ({
    type,
    varient,
    placeholder
}) => {
  return (
    <span className='border-none py-2 px-6 rounded-2xl text-2xl cursor-pointer  bg-blue-500'>
        <input type={type} placeholder={placeholder} />
    </span>
  )
}

export default Input
