import axios from 'axios'
import React from 'react'

export const SaveMassage = async (data) => {
    
   let res =  await axios.post("https://whatsapp-api-aroq.vercel.app/Save/Massage",data)
  
  
  return (
    <div></div>
  )
}

