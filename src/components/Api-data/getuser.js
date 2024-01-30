import axios from 'axios';
import React from 'react'

export const getuser = async  (dataId) => {
    const res = await axios.get(`https://what-app-steel.vercel.app/Get/Massage/${dataId}`);
    return res.data
}
export const getuserConverstion = async  (data) => {
    const response = await axios.post("https://what-app-steel.vercel.app/giConverstion/Massage", data);
    return response.data
}
