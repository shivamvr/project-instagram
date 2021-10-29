import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import more from './../../../../svg/more.svg'


const UserBar = ({user}) => {
    return (
        <StyledUserBar>
        <div className="userBox">
          <img src={user.avatar} alt="" />
          <p>
           <Link to={`/profile/${user.id}`}>{user.username} </Link>
          </p>
        </div>
        <div className="option">
          <img src={more} alt="" />
        </div>
      </StyledUserBar>

    )
}

const StyledUserBar = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
  border: solid 1px #ccc;
  border-radius: 0.2rem;
 

  .userBox {
    display: flex;
    width: 145px;
    align-items: center;
    justify-content: space-evenly;

    & > img {
      width: 35px;
      height: 35px;
      object-fit: cover;
      border-radius: 50%;
    }
    & > p {
      color: #262626;
      font-weight: 500;
      font-size: 90%;
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
  }
  .option {
    margin: auto 0;
    margin-right: 0.6rem;
    width: 1.6rem;
    & > img {
      width: 100%;
    }
  }
`

export default UserBar
