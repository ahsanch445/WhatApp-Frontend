import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import CredentialsProvider from './context/credentials'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <CredentialsProvider>
 <App />
 </CredentialsProvider>
  
  </React.StrictMode>,
)
