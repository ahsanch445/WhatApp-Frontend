import axios from 'axios';
import React from 'react'

export const getuser = async  (dataId) => {
    const res = await axios.get(`https://whatsapp-api-khaki.vercel.app/Get/Massage/${dataId}`);
    return res.data
}
export const getuserConverstion = async  (data) => {
    const response = await axios.post("https://whatsapp-api-khaki.vercel.app/Converstion/Massage", data);
    return response.data
}
