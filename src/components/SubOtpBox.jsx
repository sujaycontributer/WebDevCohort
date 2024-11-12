import React from 'react'

function SubOtpBox({
    onDone,
    references
}) {
  return (
    <div>
        <input className='bg-slate-800 border-none cursor-pointer w-[40px] h-[50px] text-white text-center rounded-2xl '  type="number"  maxLength="1"  ref={references} onChange={(e) => {
          onDone(e);  
        
        }} />
    </div>
  )
}

export default SubOtpBox
