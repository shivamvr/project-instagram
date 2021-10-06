import React, { useState } from 'react'
import styled from 'styled-components'
import home from '../../../../../src/svg/home.svg'
import activity from '../../../../../src/svg/heart.svg'
import explore from '../../../../../src/svg/explore.svg'
import chat from '../../../../../src/svg/chat.svg'
import SearchResult from './SearchResult'

const Navbar = () => {
  // State
  const [searchResultShow, setSearchResultShow] = useState(false)

  // Handler
  const inputFocusHandler = () => {
    setSearchResultShow(true)
  }
  const inputBlurHandler = () => {
    setSearchResultShow(false)
  }

  return (
    <StyledNav>
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
        <img src={home} alt="" />
        <img src={chat} alt="" />
        <img src={explore} alt="" />
        <img src={activity} alt="" />

        <Avatar>
          <img src="/image/avatar.jpg" alt="" />
        </Avatar>
      </StlyedList>
    </StyledNav>
  )
}
const StyledNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: solid #ccc 1px;
  padding: 0.4rem 0;
  & > div {
    /* border: solid springgreen 2px; */
  }
`
const Logo = styled.div`
  width: 104px;
  margin-top: 0.5rem;
  & > img {
    width: 100%;
  }
`
const SearchBar = styled.div`
  position: relative;
  height: 30px;
  width: 215px;

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
      color: #8e8e8e;
      font-family: FontAwesome;
      text-align: center;
      font-size: 85%;
    }
  }
`
const StlyedList = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 260px;
  & > img {
    /* border: solid; */
    width: 1.7rem;
  }
`
const Avatar = styled.span`
  width: 1.7rem;
  /* border: springgreen solid; */
  & > img {
    border-radius: 50%;
    width: 100%;
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
