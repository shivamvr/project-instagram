import React from 'react'
import HomePage from './components/pages/homePage/HomePage'
import LoginPage from './components/pages/loginPage/LoginPage'
import MessagePage from './components/pages/messagePage/MessagePage'

const App = () => {
  return (
    <div>
      {/* <MessagePage/> */}
      <HomePage/>
      <LoginPage/>
    </div>
  )
}

export default App
