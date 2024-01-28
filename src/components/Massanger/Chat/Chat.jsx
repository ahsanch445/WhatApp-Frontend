import React, { useContext, useEffect, useState } from 'react'
import UserChat from './Chats/UserChat'


import axios from 'axios'
import { AuthContext } from '../../../context/credentials'
import { getuserConverstion } from '../../Api-data/getuser'



const Chat = () => {
  const {creden,User} = useContext(AuthContext)
  const [Massage, setMassage] = useState({})
  useEffect(() => {
    async function fetchData() {
      try {
        const data = { sender: creden.name, reciver: User.name };
        const response = await getuserConverstion(data);
        setMassage(response)
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    fetchData();
  
  }, [User.name]);

  return (
    <div>
<UserChat Massage={Massage} />   
    </div>
  )
}

export default Chat
