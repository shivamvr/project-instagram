import React, { useState } from 'react'
import styled from 'styled-components'
// Icons
import home from '../../../../../src/svg/home.svg'
import activeHome from '../../../../../src/svg/activeHome.svg'
import activity from '../../../../../src/svg/heart.svg'
import explore from '../../../../../src/svg/explore.svg'
import activeExplore from '../../../../../src/svg/activeExplore.svg'
import chat from '../../../../../src/svg/chat.svg'
import activeChat from '../../../../../src/svg/activeChat.svg'
import add from '../../../../../src/svg/add.svg'
// Components
import SearchResult from './SearchResult'
import CreatePostModal from './CreatePostModal'
import ProfileOption from './ProfileOption'
// Router
import { useHistory } from 'react-router'
// Redux
import { useSelector } from 'react-redux'
const Navbar = () => {
  // User 
  const user = useSelector(state => state.user)
  // State
  const [searchResultShow, setSearchResultShow] = useState(false)
  const [createClicked, setCreateClicked] =  useState(false)
  const [profileClicked, setProfileClicked] =  useState(false)
  const [homeStatus,setHomeStatus] = useState(true)
  const [chatStatus,setChatStatus] = useState(false)
  const [exploreStatus,setExploreStatus] = useState(false)
  
  const history = useHistory()

  const[users,setUsers] = useState([])

    // Fecthing users 

    const getUsers = async () => {
        let uri = `https://json-web.herokuapp.com/users`
        const res = await fetch(uri)
        const resUsers = await res.json()
        setUsers(resUsers)
      }

  // Handler
  const inputFocusHandler = () => {
    setSearchResultShow(true)
    getUsers()
  }

  const inputBlurHandler = () => {
    setSearchResultShow(false)
  }

  const pageHandler = (path) => {
    history.push(path)
  }

  const homeHandler = () => {
    pageHandler('/')
    setHomeStatus(true)
    setChatStatus(false)
    setExploreStatus(false)
  }

  const chatHandler = () => {
    pageHandler('/direct')
    setHomeStatus(false)
    setChatStatus(true)
    setExploreStatus(false)
  }

  const exploreHandler = () => {
    pageHandler('/explore')
    setHomeStatus(false)
    setChatStatus(false)
    setExploreStatus(true)
  }
  
  

  return (
    <>
    <StyledNav>
      <div>
      <Logo>
        <img onClick={homeHandler} src="/image/logo.png" alt="" />
      </Logo>

      <SearchBar>
        <input
          onFocus={inputFocusHandler}
          onBlur={inputBlurHandler}
          type="text"
          placeholder="&#61442; Search"
        />

        {searchResultShow && (
          <>
            <UpTriangle>
              <div></div>
            </UpTriangle>
            <SearchResult users={users} />
          </>
        )}

      </SearchBar>

      <StlyedList>
        <img onClick={homeHandler} src={homeStatus ? activeHome : home} alt="" />
        <img onClick={()=>setCreateClicked(!createClicked)} src={add} alt="" />
        <img onClick={chatHandler} src={chatStatus ? activeChat : chat} alt="" />
        <img onClick={exploreHandler} src={exploreStatus ? activeExplore : explore} alt="" />
        <img onClick={()=>pageHandler('')} src={activity} alt="" />
        <Avatar>
          <img onClick={()=> setProfileClicked(!profileClicked)} src={user.avatar} alt="" />
        </Avatar>
      </StlyedList>
      </div>
    </StyledNav>
      {createClicked && <CreatePostModal createClicked={createClicked} setCreateClicked={setCreateClicked}/>}
      {profileClicked && <ProfileOption profileClicked={profileClicked} setProfileClicked={setProfileClicked}/>}
    </>
  )
}
const StyledNav = styled.div`
 width: 100%;
 height: 56px;
 &>div{
   z-index: 10;
   position: fixed;
   width: 100%;
   display: flex;
   align-items: center;
   border: solid #ccc 1px;
   background: #fff;
   padding: 0.4rem 3.5rem;
   & > div {
     /* border: solid springgreen 2px; */
    }
   
  }
`
const Logo = styled.div`
  width: 108px;
  margin-top: 0.5rem;
  margin-right: 19rem;
  cursor: pointer;
  & > img {
    width: 100%;
  }
`
const SearchBar = styled.div`
  position: relative;
  height: 30px;
  width: 215px;
  margin-right: 10rem;

  & > input {
    padding-left: 1.5rem;
    width: 100%;
    height: 100%;
    background: #fafafa;
    border: #e1e1e1 1px solid;
    border-radius: 0.2rem;
    color: #333;
    width: 100%;
    outline: none;
    font-size: 100%;
    font-weight: 400;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    &::placeholder {
      color: #A6A8AB;
      font-family: FontAwesome;
      text-align: center;
      font-size: 85%;
    }
  }
`
const StlyedList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 270px;
  & > img {
    /* border: solid; */
    width: 1.55rem;
    cursor: pointer;
  }
`
const Avatar = styled.span`
  width: 30px;
  height: 30px;
  cursor: pointer;
  /* border: springgreen solid; */
  & > img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const UpTriangle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  & > div {
    position: absolute;
    z-index: 0;
    top: 5px;
    left: 90px;
    width: 20px;
    height: 20px;
    background: #ccc;
    transform: rotate(45deg);
  }
`

export default Navbar
