import React from 'react'
import { Route, Switch } from 'react-router'
import ProfilePage from './components/pages/profilePage/ProfilePage'
import HomePage from './components/pages/homePage/HomePage'
import { useSelector } from 'react-redux'
import LoginPage from './components/pages/loginPage/LoginPage'
import ExplorePage from './components/pages/explorePage/ExplorePage'

const Router = () => {
  const isAuth = useSelector((state) => state.isAuth)
    return (
        <div>
            <Switch>

            <Route path={'/'} exact> 
               {isAuth ? <HomePage /> : <LoginPage />}
            </Route>

            <Route path={'/profile/:id'}>
              <ProfilePage />
            </Route>

            <Route path={'/explore'}>
              <ExplorePage />
            </Route>

            </Switch>
        </div>
    )
}

export default Router