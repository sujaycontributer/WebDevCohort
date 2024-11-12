import React, { useReducer, useRef } from 'react'
import SubOtpBox from './SubOtpBox';


export  const OtpBox = () => {

    const ref1 =useRef();
    const ref2 =useRef();
    const ref3 =useRef();
    const ref4 =useRef();
    const ref5 =useRef();

    
  return (
    <div className='flex gap-2 justify-center items-center h-screen w-full'>
      <SubOtpBox references={ref1} onDone={(e) => {
       if(e.target.value.length >1){
        console.log("404, only one value accepted");
        
       }else{
        ref2.current.focus();
       }
      }} />
      <SubOtpBox references={ref2} onDone={(e) => {
        if(e.target.value.length >1){
            console.log("404, only one value accepted");
            e.target.value = e.target.value.slice(0,1);
            console.log(e.target.value);
            
        } else ref3.current.focus()
      }} />
      <SubOtpBox references={ref3} onDone={(e) => {
        if(e.target.value.length >1){
            console.log("404, only one value accepted");
            e.target.value = e.target.value.slice(0,1);
            console.log(e.target.value);
            
        }else ref4.current.focus()
      }} />
      <SubOtpBox references={ref4} onDone={(e) => {
        if(e.target.value.length >1){
            console.log("404, only one value accepted");
            e.target.value = e.target.value.slice(0,1);
            console.log(e.target.value);
            
        }else ref5.current.focus()
      }} />
      <SubOtpBox references={ref5} onDone={(e) => {
        if(e.target.value.length >1){
            console.log("404, only one value accepted");
            e.target.value = e.target.value.slice(0,1);
            console.log(e.target.value);
            
        }
      }} />
    </div>
  )
}

export default OtpBox
