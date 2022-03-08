import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import smile from './../../../../svg/smile.svg'
import UserBar from './UserBar'
import PostReaction from './PostReaction'
import PostInfo from './PostInfo'
import { useSelector } from 'react-redux'

const Post = ({data}) => {
  const loggedUser = useSelector((state)=>state.user)
  const loggedUserId = loggedUser.id
  const {image,text,userid,id} = data


  // State 
  const[user,setUser]= useState({})
  const[likes,setLikes]= useState('')
  const[likeStatus,setLikeStatus]= useState([])

  const getUser = async () => {
    let url = `https://json-web.herokuapp.com/users?id=${userid}`
    const res = await fetch(url)
    const resUser = await res.json()
    setUser(resUser[0])
  }

  const getLikeStatus = async () => {
    let postId = await id
    let userId = await loggedUserId
    let url = `https://json-web.herokuapp.com/likes?userid=${userId}&postid=${postId}`
    const res = await fetch(url)
    const resUser = await res.json()
    setLikeStatus(resUser)
  }


  const getLikes = async () => {
    let url = `https://json-web.herokuapp.com/likes?postid=${id}`
    const res = await fetch(url)
    const resUser = await res.json()
    if(resUser.length === 0){
       setLikes('')
    }else{
      setLikes(resUser.length)

    }
  }

 
  
  useEffect(()=>{
    getUser()
    getLikes()
    getLikeStatus()
  },[])
  return (
    <StyledPost>
     <UserBar user={user}/>
      <PostImage>
        <img src={image} alt="" />
      </PostImage>
      <PostReaction likeStatus={likeStatus.length} setLikeStatus={setLikeStatus}/>
      <PostInfo text={text} likes={likes}/>
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
