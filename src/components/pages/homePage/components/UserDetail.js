import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const UserDetail = ({user}) => {
  return (
    <StyledDetail>
      <Avatar>
        <img src={user.avatar} alt="" />
      </Avatar>
      <StyledUserDetail>           
        <Link to={`/profile/${user.id}`}>{user.username} </Link>
        <p>{user.name}</p>
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
  height: 2.5rem;
  margin-right: .5rem;
  & >img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
 &>a:hover{
   text-decoration: underline;
 }
 &>p{
     color: #8e8e8e;
 }
`

export default UserDetail
