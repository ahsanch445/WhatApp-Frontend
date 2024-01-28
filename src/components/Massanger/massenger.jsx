import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Nav from "./Menu/Nav"

import Search from './Menu/Search';
import { DataMenu } from './DataMenu';
import Chat from './Chat/Chat';


const massenger = () => {
  const [Text, setText] = useState()

  return (
    <>
      <div id='main' className='w-full h-screen  flex bg-[#F0F2F5]'>
        <div id='profile-side' className="w-1/3 bg-white overflow-y-scroll">
<div className='sticky top-0 z-50'>
<Nav/>
<Search setText={setText}/>
  
</div>
<div className=' overflow-hidden bg-green-500 mt-[1vw]' >
<DataMenu Text= {Text}/>

</div>



        </div>

        <div id='chat-side' className='w-2/3 bg-[#F0F2F5] sticky overflow-hidden top-0'>
        <Chat/>
        </div>



      </div>
    </>
  )
}

export default massenger
