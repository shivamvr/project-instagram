import React from 'react'
import styled from 'styled-components'
import more from '../../../../svg/more.svg'
import arrow from '../../../../svg/arrow.svg'
const ProfileInfo = () => {
  return (
    <StyledProfile>
      <ProfileLeft>
        <Avatar>
          <img src="/image/avatar.jpg" alt="" />
        </Avatar>
      </ProfileLeft>

      <ProfileRight>
        <UserBar>
          <UserName>UsernameLorem</UserName>
          <ProfileBtns>
            <button>Follow</button>
            <button><img src={arrow} alt="" /></button>
            <div>
              <img style={{ width: '35px' }} src={more} alt="" />
            </div>
          </ProfileBtns>
        </UserBar>

        <UserInfo>
          <span style={{marginLeft: '0'}}><span>313</span> posts</span>
          <span> <span>2.3m</span> followers</span>
          <span> <span>34</span> following</span>
        </UserInfo>

        <Name>Shivam Verma</Name>

        <UserLink>
          <a href="">bit.ly/lorem</a>
        </UserLink>

        <FollowBy>
          Follow by <span>lorem</span>
        </FollowBy>
      </ProfileRight>
    </StyledProfile>
  )
}

const StyledProfile = styled.div`
  width: 100%;
  height: 230px;
  border: solid;
  display: flex;
  justify-content: center;
  & > div {
    border: solid 1.5px blue;
  }
`
const ProfileLeft = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ProfileRight = styled.div`
  margin-left: 2rem;
  width: 612px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const Avatar = styled.div`
  width: 165px;
  height: 165px;
  border: pink;
  display: flex;
  background: linear-gradient(to right, #c53293, #f99c4b);
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  padding: 3px;
  margin-bottom: 1.4rem;
  transform: rotate(110deg);
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #fff;
    transform: rotate(-110deg);
  }
`
const UserBar = styled.div`
  display: flex;
  border: solid red 2px;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  & > div {
    display: flex;
    border: solid #ccc 2px;
    align-items: center;
  }
`
const UserName = styled.div`
  font-size: 28px;
  font-weight: 300;
  margin-right: 2rem;
`
const ProfileBtns = styled.div`
  & > button {
    height: 30px;
    width: 90px;
    color: #fff;
    background: #0095f6;
    border: none;
    outline: none;
    font-size: 0.95rem;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    margin: 0 0.5rem;
    border-radius: 0.3rem;
  }
  &>button+button{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      &>img{
        width: 14px;
        transform: rotate(180deg);
      }
  }
`
const UserInfo = styled.div`
  display: flex;
  border: solid pink 2px;
  margin-bottom: 1rem;
  &>span{
   font-size: 1rem;
   font-weight: 400;
   border: solid 2px blue;
   margin: 0 1.2rem;
   color: #333;
   &>span{
       font-weight: 500;
   }
  }
`
const Name = styled.div`
  font-weight: 500;
  color: #262626;
  font-size: 16px;
  margin-bottom: 3px;
`
const UserLink = styled.div`
  margin-bottom: 0.5rem;
  font-weight: 500;
  &>a{
      color:#00376B;
    }
`
const FollowBy = styled.div`
 color: #8E8E8E;
 font-size: 12px;
 font-weight: 500;
 &>span{
   color: #262626
 }
`

export default ProfileInfo
