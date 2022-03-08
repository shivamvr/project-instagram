import React,{useState} from 'react'
import styled from 'styled-components'
import PostModal from './PostModal'

const Photo = ({post,userId}) => {
    const[user,setUser] = useState({})
    const[postClicked,setPostClicked] = useState(false)

     // Fecthing User 
     const getUser = async () => {
        let uri = `https://json-web.herokuapp.com/users?id=${userId}`
        const res = await fetch(uri)
        const resUser = await res.json()
        setUser(resUser[0])
      }
      
      const imgClickHandler = () => {
          getUser()
          setPostClicked(true)
      }
      
    return (
        <StyledPhoto>
             {postClicked ? <PostModal user={user} post={post} postClicked={postClicked} setPostClicked={setPostClicked} />  : ''}
            <img onClick={imgClickHandler} src={post.image} alt="" />
        </StyledPhoto>
    )
}
const StyledPhoto = styled.div`
width: 100%;
height: 100%;
background: #ccc;
display: flex;
align-items: center;
justify-content: center;
color: #333;
&>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
}
`
export default Photo
