import React, { useEffect } from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import Search from './Pages/Search'

 
function App() {
 
  const navigate = useNavigate();
   
  useEffect(() => {
    onAuthStateChanged(auth, async(user)=>{
      if(user) {
        console.log('logged in');
        navigate('/'); 
      }else{
        console.log('logged out');
        navigate('/login');
      }
    }
    )}, [])

  return (
   <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/search' element={<Search />} />
    </Routes>     
   </div>
  )
}

export default App
