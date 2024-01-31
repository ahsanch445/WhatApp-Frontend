import React from 'react'
import icon from "../assets/whatappIcon.png"
import Auth from './auth' 

const Login = ()=> {
  return (
    <div className='main w-100 h-screen overflow-auto bg-[#f0f2f5] relative '>
  <header className='h-[22vw] bg-[#00a884]'>
    <div className='px-16 py-10 flex items-center gap-[3vw] text-white font-[Segoe UI] text-base font-medium'>
       <img className='size-[4vw] ' src={icon}alt="" />
       <h5 className='uppercase  text-[2vw] '>Whatapp web</h5>
        </div>

  </header>
  <div className='d-flex justify-center items-center'>

  
<div id='hero'  className=' flex gap-3 shadow-xl rounded  w-4/5 h-85 absolute z-10 top-24 bg-[#ffffff] ' > 

<div id='my-element2' className='h-full w-[67%]  '>
<div className='h-full py-[11vw] px-11'><h1 className='text-[3.2vw] tracking-tighter font-normal opacity-45'>Use Whatapp on your computer</h1>
<div    className='  my-element mt-[4vw] font-arial text-[1.8vw] opacity-90'>1. Open Whatapp on your phone</div>
<div  className='mt-[1vw] my-element  font-arial text-[1.8vw] opacity-90'>2. Tap <b className='font-medium'>Menu </b> : or <b className='font-medium'>settings</b> and select <b className='font-medium'>  Linked Devices</b></div>
<div  className=' mt-[1vw] my-element  font-arial text-[1.8vw] opacity-90'>3. Tab on <b className='font-medium' >Link a device</b> </div>
<div  className='mt-[1vw] my-element   font-arial text-[1.7vw] opacity-90'>4. Point your phone on this screen to capture QR Code</div>

</div>
</div>
<div id="QR-Code" className=' px-2 relative flex justify-center  h-full w-[35%'>
<img  className='mt-[12vw]   h-[25vw] w-[27vw]' src="https://cdn-icons-png.flaticon.com/512/241/241528.png" alt="" srcset="" />
<div className='w-[20vw] absolute top-[23vw] z-10 bg-white'><Auth/></div>
</div>
 </div>
    </div>
    </div>
  )
}



export default Login
