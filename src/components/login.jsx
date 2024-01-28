import React from 'react'
import icon from "../assets/whatappIcon.png"
import Auth from './auth' 

const Login = ()=> {
  return (
    <div className='main w-100 h-screen bg-[#f0f2f5] relative '>
  <header className='h-56 bg-[#00a884]'>
    <div className='px-16 py-10 flex items-center gap-4 text-white font-[Segoe UI] text-base font-medium'>
       <img className='size-10 ' src={icon}alt="" />
       <h5 className='uppercase '>Whatapp web</h5>
        </div>

  </header>
<div id='hero'  className=' flex gap-4 shadow-xl rounded h-4/5 w-4/5 h-85 absolute z-10 top-24 bg-[#ffffff] left-24' > 

<div className='h-full w-[65%]  '>
<div className='h-full py-28 px-11'><h1 className='text-3xl tracking-tight font-normal opacity-45'>Use Whatapp on your computer</h1>
<p  className=' mt-12 font-arial text-[1.8vw] opacity-90'>1. Open Whatapp on your phone</p>
<p  className=' mt-2 font-arial text-[1.8vw] opacity-90'>2. Tap <b className='font-medium'>Menu </b> : or <b className='font-medium'>settings</b> and select <b className='font-medium'>  Linked Devices</b></p>
<p  className=' mt-2 font-arial text-[1.8vw] opacity-90'>3. Tab on <b className='font-medium' >Link a device</b> </p>
<p  className=' mt-2 font-arial text-[1.8vw] opacity-90'>4. Point your phone on this screen to capture QR Code</p>

</div>
</div>
<div id="QR-Code" className='relative flex justify-center  h-full w-[35%'>
<img  className='mt-32  h-60 w-60' src="https://cdn-icons-png.flaticon.com/512/241/241528.png" alt="" srcset="" />
<div className='absolute top-60 z-10 bg-white'><Auth/></div>
</div>
 </div>
    </div>
  )
}



export default Login
