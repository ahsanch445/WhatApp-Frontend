import React, { useEffect, useRef, useState } from 'react'
import UserNav from './UserNav'
import UserFooter from './UserFooter'
import UserMassage from "./UserMassage"
import { AuthContext } from '../../../../context/credentials'
import { useContext } from 'react'
import { SaveMassage } from './SaveMassage'
import { getuser } from '../../../Api-data/getuser'
import HomeCard from "./HomeCard"
const UserChat =  ({Massage}) => {
  const [event, setevent] = useState()
 
  const messagesRef = useRef(null);
const dataId = Massage?.data?._id;
const {creden,User,socket,settoggle,toggle} = useContext(AuthContext)
const [liveMassage, setliveMassage] = useState(null)
const [Text,setText] = useState()
const [UserText, setUserText] = useState([])
const [file, setfile] = useState(null)
const [Url, setUrl] = useState()




 useEffect(() => {
  const fetchMessages = async () => {
   
      
       
      let res =  await getuser(dataId)
        setUserText(res);
       
      
    }
  

    dataId && fetchMessages();
}, [User.name,dataId,toggle]);







useEffect(() => {
  console.log("Socket connected:", socket.current.connected);
}, [socket]);

useEffect(() => {
socket.current.on("getMassage",data=>{


  setliveMassage({
    
    ...data,
    timestamp:Date.now()
  })
})

 
}, [UserText])
useEffect(() => {
 
  // Check if liveMassage is truthy and the sender is included in conver
  if (liveMassage && Massage?.data?.conver.includes(liveMassage.sender)) {
   

    // Append liveMassage to UserText
    setUserText(prev =>[...prev,liveMassage]);
    
  }
}, [liveMassage, Massage]);








useEffect(() => {
  // Scroll to the bottom when the component mounts or when messages change
  scrollToBottom();
}, [UserText]);





const scrollToBottom = () => {
  if (messagesRef.current) {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }
};




 
  const sendValue = async (event) => {
   
    if(event.key === 'Enter'|| event.type === 'click'){
      event.preventDefault();
     
      var massage ={}
      if(!file){
       massage = {
          sender:creden.name,
          reciver:User.name,
          Converstion:dataId ,
        type:"text",
        text:Text,
        
        
        }
      }

else{
  setevent(event)
  massage = {
    sender:creden.name,
    reciver:User.name,
    Converstion:dataId ,
  type:"file",
  text:Url,
  
  
  }
}
socket.current.emit("sendUser",massage)

await SaveMassage(massage)
settoggle(data =>!data)
setText("")
setUrl("")
setfile("")


    }
  
   

    


  


   
  }
 
  return (
    <>
    {User.name  ?    <div className='h-screen w-full d-flex flex-col'>
   
   <UserNav/>
  
   <div style={{flex:"1",overflowY:"auto"}} className=' bg-[#F4F1EB]  pb-[6vw]'  ref={messagesRef} >


 {
   UserText&&UserText.map((massage)=>(
<UserMassage  UserText={UserText} massage={massage} />
   ))
 }

</div>

   <UserFooter event={event} setUrl={setUrl} file={file} setfile={setfile} sendValue={sendValue}  setText={setText} Text={Text} />
   </div>
   :<HomeCard/>

    }
    
    </>
   
  )
}

export default UserChat
