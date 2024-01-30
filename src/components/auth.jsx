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



const response = axios.post("https://what-app-steel.vercel.app/getUserData",decoded)

 }
 let onFailure = ()=>{
  console.log("login fail")
 }

  return (
    <GoogleOAuthProvider clientId="939751230320-uve4o06v0ocopjrl6speet7h2c00vq74.apps.googleusercontent.com"> 
          <GoogleLogin
  onSuccess={onLogin}
  onError={onFailure}
/>;
    </GoogleOAuthProvider>
    
  );
};

export default GoogleAuth;
