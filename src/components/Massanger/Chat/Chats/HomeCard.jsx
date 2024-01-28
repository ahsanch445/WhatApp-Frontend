import React from 'react'
import Empty from "../../../../assets/Empty.png"
const HomeCard = () => {
  return (
    <center className='w-full h-screen '>
      <div  className=' mt-[10vw] h-25vw] w-[32vw]'>
        <img src={Empty} className=' h-full w-full' alt="dp" srcset="" />
      </div>
      <div className='w-[80%] mt-[2.5vw]'>
      <h1 style={{opacity:"0.8"}} className="text-[3vw] font-[100] ">Download WhatsApp for Windows</h1>
      <div style={{opacity:"0.8"}} className="w-[90%] text-[1.4vw] ">Make calls, share your screen and get a faster experience when you download the Windows app.</div>
      </div>
    </center>
  )
}

export default HomeCard
