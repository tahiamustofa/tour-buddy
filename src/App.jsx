import { Outlet } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer/Footer'

import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    
      
      <Outlet/> 
 
  
   <Footer></Footer>    
    </>
  )
}

export default App
