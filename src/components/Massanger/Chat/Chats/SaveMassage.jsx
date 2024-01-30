import axios from 'axios'
import React from 'react'

export const SaveMassage = async (data) => {
    
   let res =  await axios.post("https://whatsapp-api-khaki.vercel.app/Save/Massage",data)
  
  
  return (
    <div></div>
  )
}

