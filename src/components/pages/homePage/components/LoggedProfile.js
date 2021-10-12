import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const LoggedProfile = () => {
  const user = useSelector(state => state.user)
  return (
    <StyledProfile>
      <Left>
        <div>
          <img src={user.avatar} alt="" />
        </div>

        <div>
          {user.userName}
          <p>{user.name}</p>
        </div>

      </Left>

      <Right>Switch</Right>
    </StyledProfile>
  )
}
const StyledProfile = styled.div`
  width: 100%;
  border: pink 2px solid;
  display: flex;
  justify-content: space-between;
  &>div{
      border: solid 1px #ccc;
  }
`
const Left = styled.div`
display: flex;
align-items: center;
&>div:first-child{
    width: 56px;
    height: 56px;
    margin-right: .7rem;
    &>img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
}

&>div:last-child{
    line-height: 1.2rem;
    font-size: 14px;
    &>p{
        color: #8e8e8e;
    }
}
`
const Right = styled.div`
display: flex;
align-items: center;
color: #0095F6;
font-weight: 500;
font-size: 12px;
`

export default LoggedProfile
