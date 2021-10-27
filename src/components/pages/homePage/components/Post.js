import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import more from './../../../../svg/more.svg'
import smile from './../../../../svg/smile.svg'
import save from './../../../../svg/save.svg'
import like from './../../../../svg/heart.svg'
import message from './../../../../svg/message.svg'
import share from './../../../../svg/chat.svg'
import { Link} from 'react-router-dom'

const Post = ({data}) => {
  const {image,text,userId} = data
  // State 
  const[user,setUser]= useState({})
 
  const getUser = async () => {
    let url = `http://localhost:3001/users?id=${userId}`
    const res = await fetch(url)
    const resUser = await res.json()
    setUser(resUser[0])
  }

  useEffect(()=>{
    getUser()
  },[])
  
  return (
    <StyledPost>
      <StyledUserBar>
        <div className="userBox">
          <img src={user.avatar} alt="" />
          {/* <p>{user.name}</p> */}
          <p>
           <Link to={`/profile/${user.username}`}>{user.username} </Link>
          </p>
        </div>
        <div className="option">
          <img src={more} alt="" />
        </div>
      </StyledUserBar>

      <PostImage>
        <img src={image} alt="" />
      </PostImage>

      <PostReaction>
        <div>
          <img src={like} alt="" />
          <img src={message} alt="" />
          <img src={share} alt="" />
        </div>

        <div>
          <img src={save} alt="" />
        </div>
      </PostReaction>

      <PostInfo>
        <div className="post-likes">5,034 likes</div>
        <div className="post-text">
          cares_one_no <span>{text}</span>
        </div>
        <div className="post-comments">View all 30 comments</div>
        <div className="post-time">5 hours ago</div>
      </PostInfo>

      <PostComment>
        <div>
          <img src={smile} alt="" />
        </div>
        <input type="text" placeholder="Add a comment..." />
        <button>Post</button>
      </PostComment>
    </StyledPost>
  )
}
const StyledPost = styled.div`
  width: 100%;
  height: 1070px;
  border: #ccc 1.5px solid;
  background: #fff;
  margin-top: 2rem;
`

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
const PostImage = styled.div`
  width: 100%;
  height: 740px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const PostReaction = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid #ccc 1px;
  padding: 1rem;
  margin-top: .4rem;
  & > div {
    /* border: solid; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 7rem;
    height: 24px;
  }
  & > div + div {
    width: 24px;
  }
  & > div > img {
    height: 100%;
    width: 30%;
  }
  & > div + div > img {
    margin-right: 0rem;
    width: 100%;
  }
`
const PostInfo = styled.div`
  margin: 0.5rem 0;
  color: #262626;
  padding: 5px;
  font-size: 90%;
  & > div {
    border: solid 1px blue;
    margin-bottom: 6px;
  }
  .post-likes {
    margin-bottom: 1rem;
    background: pink;
  }
  .post-text {
    font-weight: 500;
    & > span {
      font-weight: 400;
    }
  }
  .post-comment {
    color: #8e8e8e;
  }
  .post-time {
    color: #8e8e8e;
    text-transform: uppercase;
    font-size: 85%;
  }
`

const PostComment = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border: solid #ccc 1px;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.8rem;
  & > div {
    width: 24px;
  }
  & > div > img {
    width: 100%;
  }
  & > input {
    color: #262626;
    width: 510px;
    height: 2.1rem;
    padding: 1rem;
    border: none;
    outline: none;
  }
  & > button {
    color: #0095f6;
    border: none;
    background: #fff;
    padding-left: 0.4rem;
  }
`
export default Post
