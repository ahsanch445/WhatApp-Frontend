
import Login from './components/login'
import './App.css'
import Massenger from './components/Massanger/massenger'
import { useContext } from 'react'
import { AuthContext } from './context/credentials'
function App() {
  const {creden} = useContext(AuthContext) 

  return (
    <>
{creden ? <Massenger/>
:  <Login/>
}
   
 
   
   
   

   
  

        
    </>
  )
}

export default App
