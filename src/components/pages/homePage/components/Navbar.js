import React from 'react'
import styled from 'styled-components'
import home from '../../../../../src/svg/home.svg'
import activity from '../../../../../src/svg/heart.svg'
import explore from '../../../../../src/svg/explore.svg'
import chat from '../../../../../src/svg/chat.svg'
const Navbar = () => {
  return (
    <StyledNav>
      <Logo>
        <img src="/image/logo.png" alt="" />
      </Logo>

      <SearchBar>
        <input type="text" placeholder='&#61442; search' />
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
  border: solid;
  & > div {
    border: solid springgreen 2px;
  }
`
const Logo = styled.div`
  width: 136px;
  & > img {
    width: 100%;
  }
`
const SearchBar = styled.div`
  height: 30px;
  width: 215px;
  
  & > input {
    padding: .3rem;
    width: 100%;
    height: 100%auto;
    border: pink 1px solid;
    color: #333;
    width: 100%;
    outline: none;
  }
`
const StlyedList = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 260px;
  &>img{
   border: solid;
   width: 1.7rem;
  }
`
const Avatar = styled.span`
  width: 1.7rem;
  border: springgreen solid;
  & > img {
    border-radius: 50%;
    width: 100%;
  }
`

export default Navbar
