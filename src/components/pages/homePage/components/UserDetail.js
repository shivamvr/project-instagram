import React from 'react'
import styled from 'styled-components'
const UserDetail = () => {
  return (
    <StyledDetail>
      <Avatar>
        <img src="/image/avatar.jpg" alt="" />
      </Avatar>
      <StyledUserDetail>
        User name
        <p>name</p>
      </StyledUserDetail>
    </StyledDetail>
  )
}
const StyledDetail = styled.div`
  display: flex;
  border: solid 1px #8e8e8e;
  border-radius: 0.2rem;
  background: #fff;
  color: #333;
  padding: .5rem;
  margin: 0.2rem;
`
const Avatar = styled.div`
  width: 2.5rem;
  margin-right: .5rem;
  & >img {
    width: 100%;
    border-radius: 50%;
  }
`
const StyledUserDetail = styled.div`
 color: #333;
 width: 200px;
 height: 3rem;
 font-size: 90%;
 border: solid;
 display: flex;
 flex-direction: column;
 justify-content: center;
 &>p{
     color: #8e8e8e;
 }
`

export default UserDetail
