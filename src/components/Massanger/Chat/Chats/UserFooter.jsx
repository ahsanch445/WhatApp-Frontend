import React, { useEffect } from 'react'
import MoodIcon from '@mui/icons-material/Mood';
import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import styled from '@emotion/styled';
import SendIcon from '@mui/icons-material/Send';




import axios from 'axios';

function UserFooter(data) {

  const {sendValue,setText,Text,file,setfile,setUrl,sendFile} = data
console.log(Text)
const Files=(data)=>{
  data.preventDefault(); 
  setfile(data.target.files[0])
  setText(data.target.files[0].name)

}

useEffect(() => {
  const FilesData = async () => {
    if (file) {
      try {
      
       
        const data = new FormData()
      
        data.append("file", file);
       
  
       
  
      let  response =  await axios.post("https://whatsapp-api-khaki.vercel.app/Upload/Files", data);
              setUrl(response.data.imgUrl) 
      } catch (error) {
        // Handle error
        console.error("Error uploading file:", error);
      }
    }
  };
  

  FilesData();
}, [file]);


  const AddIcon2 = styled(AddIcon)({
   
    fontSize:"3vw"
  });
  const MoodIcon2 = styled(MoodIcon)({
   
    fontSize:"2.8vw"
  });
  const KeyboardVoiceIcon2= styled(KeyboardVoiceIcon)({
   
    fontSize:"2.8vw"
  });
  return (
    <div className=' mb-auto flex items-center justify-between px-4 py-2 w-full '>
        
            <div className='flex  gap-[1.5vw]  '>
 <MoodIcon2/>
 <label htmlFor='data'  className=' cursor-pointer d-flex '>
  <input  onChange={(data)=>Files(data)} id='data'  className='d-none' type="file" />
  <AddIcon2  />
  </label>

</div>
<div className='flex items-center gap-[2vw] w-[85%] '>
  {
    file? <input   value={Text}          
  
onChange={(e)=>{setText(e.target.value)}}



className='outline-none w-full bg-[#FFFFFF] p-[0.6vw] rounded ' placeholder='Type a massage' p type="text" />

:<input   value={Text}           onKeyDown={(e) => {
         
      sendValue(e);

  }}
onChange={(e)=>{setText(e.target.value)}}



className='outline-none w-full bg-[#FFFFFF] p-[0.6vw] rounded ' placeholder='Type a massage' p type="text" />
  }

<div>
  {
    file? <div style={{borderRadius:"50%"}} className=' cursor-pointer p-[1.5vw] bg-[#00a884]'> <SendIcon className='text-[#ffffff]' onClick={sendFile}/></div>:<KeyboardVoiceIcon2/>
  }

</div>

 </div>
    </div>
  )
}

export default UserFooter
