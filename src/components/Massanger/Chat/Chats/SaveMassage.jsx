import axios from 'axios'
import React from 'react'

export const SaveMassage = async (data) => {
    
   let res =  await axios.post("http://localhost:3000/Save/Massage",data)
  
  
  return (
    <div></div>
  )
}

