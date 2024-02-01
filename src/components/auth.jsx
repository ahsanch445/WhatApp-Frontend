import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useContext } from 'react';
import { AuthContext } from '../context/credentials';
import axios from 'axios';

const GoogleAuth = () => {
const {setcreden} = useContext(AuthContext)
 let onLogin = (res)=>{
var decoded = jwtDecode(res.credential)
setcreden(decoded)



const response = axios.post("https://whatsapp-api-khaki.vercel.app/getUserData",decoded)

 }
 let onFailure = ()=>{
  console.log("login fail")
 }

  return (
    <GoogleOAuthProvider clientId="939751230320-umv12reg8ovqm1vd7tti2sa5dr1oere4.apps.googleusercontent.com"> 
          <GoogleLogin
  onSuccess={onLogin}
  onError={onFailure}
/>;
    </GoogleOAuthProvider>
    
  );
};

export default GoogleAuth;
