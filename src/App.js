import React from 'react'
import { useSelector } from 'react-redux'
import Router from './Router'
import Navbar from './components/pages/homePage/components/Navbar'
// import MessagePage from './components/pages/messagePage/MessagePage'

const App = () => {
  const isAuth = useSelector((state) => state.isAuth)
  return (
    <div>
      {isAuth ? <Navbar /> : ''} 
       <Router/> 
    </div>
  )
}

export default App
