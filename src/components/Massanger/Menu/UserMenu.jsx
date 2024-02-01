import React, { useEffect, useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/system';
import { AuthContext } from '../../../context/credentials';
import { useContext } from 'react';
import axios from 'axios';
import {  getuserConverstion } from '../../Api-data/getuser';

const UserMenu = ({user}) => {
  const [timestamp, setTimestamp] = useState(null);
  const {setUser,creden,toggle} = useContext(AuthContext)
const [Display, setDisplay] = useState({})
useEffect(() => {
  const  fetch = async ()=>{
    var data = await getuserConverstion({sender:creden.name,reciver:user.name})
    var data = data.data
    console.log(data)
 setDisplay({updateText:data?.massage,  timestamps:data?.updatedAt})
  console.log(Display)
  }
  
  fetch()
  }, [toggle])

const UserData= async()=>{

  setUser(user)
 var CoverstionData = {sender:user.name,recive:creden.name}
 var res = await axios.post("https://whatsapp-api-khaki.vercel.app/addConverstion",CoverstionData)

}

  

const GreenCheckIcon = styled(CheckIcon)({
  color: '#96948d', 
  fontSize:"2vw"
});


useEffect(() => {
  // Update the time string when the component mounts or when message.timestamp changes
  if (Display.timestamps) {
    const date = new Date(Display.timestamps);
    const formattedDate = date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });

    setTimestamp(formattedDate);
  }
}, [Display.timestamps]);


  return (
    <div onClick={UserData}>
<div id='main' className=' w-full  '>
    <div id='User-Profile' className=' cursor-pointer flex items-center justify-between bg-white w-full px-[1vw] py-[0.5vw]'>
<div className='flex gap-[1vw]'>
  <div></div>
  <img className='rounded-full object-cover h-[5vw] w-[5vw]  ' src={user.picture} alt="" />
  <div>
    <h5 style={{lineHeight:"1"}} className='text-[2.3vw] mt-[1.2vw] fw-normal'>{user.name} </h5>
  <p className='m-[1vw] flex items-center gap-[0.5vw]' style={{lineHeight:"1",fontSize:"1.3vw"}}>  
  {Display?.updateText?.includes("whatsapp-api-khaki.vercel.app")? "media":Display.updateText}</p>
  </div>
</div> 
<div>
  <p className='  opacity-80 text-xs font-semibold'>{Display?.timestamps&&<div className=' text-[1.2vw] '>{timestamp}</div>}</p>
  </div>
    </div>
    
   

</div>

    </div>
  
  )
}

export default UserMenu
