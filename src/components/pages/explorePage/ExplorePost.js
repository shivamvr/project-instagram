import React,{useState} from 'react'
import styled from 'styled-components'
import PostModal from '../profilePage/components/PostModal'

const ExplorePost = ({post}) => {
    console.log('post:', post)
    const[postClicked,setPostClicked] = useState(false)
    const[user,setUser] = useState({})
     // Fecthing User 
     const getUser = async () => {
        let uri = await `http://localhost:3001/users?id=${post.userid}`
        const res = await fetch(uri)
        const resUser = await res.json()
        setUser(resUser[0])
      }
    //Handler
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
export default ExplorePost
