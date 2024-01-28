import React, { useEffect, useState,useContext } from 'react'
import UserMenu from './Menu/UserMenu'
import axios from 'axios'
import { AuthContext } from '../../context/credentials'

export const DataMenu = ({Text}) => {
  console.log(Text) 
  const {creden,socket, setactiveUser} = useContext(AuthContext) 
const [user, setuser] = useState([])
    async function Getdata(){
let response= await axios.get("http://localhost:3000/getuser")
const filteredUsers = response.data.filter(user => 
  typeof Text === 'string' && typeof user.name === 'string' && user.name.toLowerCase().includes(Text.toLowerCase())
);


setuser(filteredUsers)

    }
    useEffect(() => {
 Getdata()
    
     
    }, [Text])
    useEffect(() => {
 
    socket.current.emit("getActive",creden)
    socket.current .on("fetchUser",activeUser=>{
      setactiveUser(activeUser)
    })
    }, [creden])
    
  return (
    <>
  {user.map(user => (
    user.name !==creden.name &&
  <UserMenu  key={user.id} user={user} />
))}

    
        
    </>
  )
}
