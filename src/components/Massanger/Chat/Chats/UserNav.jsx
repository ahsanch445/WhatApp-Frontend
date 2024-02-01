import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../../../context/credentials'
import VideocamIcon from '@mui/icons-material/Videocam';
import Search from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const UserNav = () => {
    const {User,activeUser} = useContext(AuthContext)
  
  return (
    <>
   
    
    <div className=' px-2 flex justify-between items-center w-full h-16 bg-[#F0F2F5]'>
     
     <div className='flex  items-center gap-[1.5vw] '>
        <img src={User.picture} className='rounded-full h-[4.5vw] w-[4.5vw] object-cover align-middle'  alt="" />
        <div>
        <div className='mt-[0.5vw] text-[2vw] tracking-tight'>{User.name}</div>
        <div className='text-[1.2vw]'>{activeUser?.find(e=> e.name === User.name) ?"online":"offline"}</div>
        </div>
        
       
     </div>
    
     <div className='flex items-center justify-center gap-[3vw]'>
        <VideocamIcon style={{fontSize:"2.4vw"}}/>
<Search style={{fontSize:"2.4vw"}} />
<div >
<div className=" dropdown-menu-lg-start">
  <div className=" " id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <div className=''><MoreVertIcon style={{fontSize:"2.4vw"}}/></div>
    
  </div>

</div>
</div>

     </div>
     </div>
   
    </>
  )
}

export default UserNav
