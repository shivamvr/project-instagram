import React, { useState } from 'react'
import styled from 'styled-components'
import home from '../../../../../src/svg/home.svg'
import activity from '../../../../../src/svg/heart.svg'
import explore from '../../../../../src/svg/explore.svg'
import chat from '../../../../../src/svg/chat.svg'
import camera from '../../../../../src/svg/camera.svg'
import SearchResult from './SearchResult'
import CreatePostModal from './CreatePostModal'
import ProfileOption from './ProfileOption'
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

  const history = useHistory()

  // Handler
  const inputFocusHandler = () => {
    setSearchResultShow(true)
  }
  const inputBlurHandler = () => {
    setSearchResultShow(false)
  }

  const pageHandler = (path) => {
    history.push(path)
  }
  

  return (
    <>
    <StyledNav>
      <div>
      <Logo>
        <img src="/image/logo.png" alt="" />
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
            <SearchResult />
          </>
        )}

      </SearchBar>

      <StlyedList>
        <img onClick={()=>pageHandler('/')} src={home} alt="" />
        <img onClick={()=>pageHandler('')} onClick={()=> setCreateClicked(!createClicked)} src={camera} alt="" />
        <img onClick={()=>pageHandler('')} src={chat} alt="" />
        <img onClick={()=>pageHandler('/explore')} src={explore} alt="" />
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
