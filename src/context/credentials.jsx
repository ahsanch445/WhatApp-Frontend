import React, { createContext, useState,useEffect,useRef } from "react";
export const AuthContext = createContext(null);
import {io} from "socket.io-client"

const CredentialsProvider = ({ children }) => {
    const [creden, setcreden] = useState()
    const [User, setUser] = useState({})
    const [activeUser, setactiveUser] = useState([])
    
  const [toggle, settoggle] = useState(false)
  const socket =  useRef()
  useEffect(() => {
    socket.current = io("https://fluttering-spicy-acapella.glitch.me/");
  
    // Error handling
    socket.current.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
    });
  
    socket.current.on('connect_timeout', (timeout) => {
      console.error('Socket connection timeout:', timeout);
    });
  
    return () => {
      // Disconnect socket when component unmounts
      socket.current.disconnect();
    };
  }, []);
  
  return (
 
      <AuthContext.Provider value={{settoggle,toggle,creden,setcreden,User, setUser,socket,activeUser ,setactiveUser}}>

{children}
      </AuthContext.Provider>
 
  )
  
}

export default  CredentialsProvider


