import axios from 'axios'
import React from 'react'

export const SaveMassage = async (data) => {
    
   let res =  await axios.post("https://what-app-steel.vercel.app/Save/Massage",data)
  
  
  return (
    <div></div>
  )
}

