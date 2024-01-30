import axios from 'axios';
import React from 'react'

export const getuser = async  (dataId) => {
    const res = await axios.get(`http://localhost:3000/Get/Massage/${dataId}`);
    return res.data
}
export const getuserConverstion = async  (data) => {
    const response = await axios.post("http://localhost:3000/Converstion/Massage", data);
    return response.data
}
