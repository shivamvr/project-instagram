import React from 'react'
import { useSelector } from 'react-redux'
import HomePage from './components/pages/homePage/HomePage'
import LoginPage from './components/pages/loginPage/LoginPage'
import ProfilePage from './components/pages/profilePage/ProfilePage'
// import MessagePage from './components/pages/messagePage/MessagePage'

const App = () => {
  const isAuth = useSelector((state) => state.isAuth)
  console.log('isAuth:', isAuth)

  return (
    <div>
      {/* <ProfilePage/> */}

      {isAuth ? <HomePage /> : <LoginPage />}

      {/* <MessagePage /> */}
    </div>
  )
}

export default App
