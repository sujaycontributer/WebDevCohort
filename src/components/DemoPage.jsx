import React from 'react'
import { Button } from './Button'
import Input from './Input'

function DemoPage() {
  return (
    <div className='flex'>
      <SideBar/> 
      <MainContent />
    </div>
  )
}


const SideBar = () => {
    return <div className='bg-red-200 w-72 h-screen'>
    Sidebar
    </div>
}

const MainContent = () => {
    return (<div className='h-screen w-full bg-red-500'>
      <div className='grid grid-cols-10  gap-4 p-4 text-white  '>
          <div className='bg-green-300 col-span-10 md:col-span-3 p-10 text-center'>1</div>
          <div className='bg-green-300 col-span-10 md:col-span-3 p-10 text-center'>2</div>
          <div className='bg-green-300 col-span-10 md:col-span-4 p-10 text-center'>3</div>

          <div className='p-10'><Button  disabled={false} >Sign up </Button></div>
          <div className='p-10'><Input type='text' placeholder='exmple.gmail.com' className="bg-blue-500" > </Input></div>          

          {/* <div className='bg-black p-10'><span>Hello</span></div>
          <div  className='bg-black p-10'><span>Hi there</span></div> */}

      </div>
      
  </div>)
}

export default DemoPage
