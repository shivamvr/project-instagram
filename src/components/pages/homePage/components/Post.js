import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import smile from './../../../../svg/smile.svg'
import UserBar from './UserBar'
import PostReaction from './PostReaction'
import PostInfo from './PostInfo'

const Post = ({data}) => {
  const {image,text,userid} = data
  // State 
  const[user,setUser]= useState({})
 
  const getUser = async () => {
    let url = `http://localhost:3001/users?id=${userid}`
    const res = await fetch(url)
    const resUser = await res.json()
    setUser(resUser[0])
  }

  useEffect(()=>{
    getUser()
  },[])
  
  return (
    <StyledPost>
     <UserBar user={user}/>
      <PostImage>
        <img src={image} alt="" />
      </PostImage>
      <PostReaction/>
      <PostInfo text={text}/>
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

const PostImage = styled.div`
  width: 100%;
  height: 740px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
