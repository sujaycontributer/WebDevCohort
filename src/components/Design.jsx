import React, { useEffect, useState } from 'react'
import SidebarToggle from './icons/SidebarToggle'
import { useMediaQuery } from '@uidotdev/usehooks';


export const Design = () => {
    const [sidebaarOpen, setSidebarOpen] = useState(true);
    const isDesktop = useMediaQuery("(min-width:768px)")
    console.log((isDesktop));

    useEffect(() =>{
        if(isDesktop == false) {
            setSidebarOpen(false);

        } else{
            setSidebarOpen(true);
        }
    },[isDesktop])
    


    return (
        <div >
          <div className='flex '>
          <Sidebar sidebaarOpen={sidebaarOpen} setSidebarOpen={setSidebarOpen}  />
          <MainContent />
          </div>
        </div>
    )
}

function Sidebar({
    sidebaarOpen,
    setSidebarOpen
}){
    
    if(!sidebaarOpen){
        return <div className="bg-blue-800  fixed  top-4 left-4  cursor-pointer">
            <SidebarToggle setSidebarOpen={setSidebarOpen}  />
        </div>
    }
    return <div className="bg-blue-800 h-screen absolute md:relative w-20 md:w-96 cursor-pointer">
        <SidebarToggle  setSidebarOpen={setSidebarOpen}  />
    </div>
}

function MainContent () {
    return <div className='bg-slate-700  flex flex-col gap-2 h-screen  md:h-screen w-full'>
            <div className='hidden md:block bg-black h-36 w-full'>

            </div>
            <div className='grid  gap-5 grid-cols-9 w-full p-8'>
                <div className='bg-red-800 h-80 rounded-2xl hidden md:block col-span-9 md:col-span-2 -translate-y-16 shadow-lg '></div>
                <div className='bg-red-900 h-96 rounded-2xl col-span-9 md:col-span-4 shadow-lg'></div>
                <div className='bg-red-400 h-60 rounded-2xl col-span-9 md:col-span-3 shadow-lg'></div>  
            </div>
    </div>
}