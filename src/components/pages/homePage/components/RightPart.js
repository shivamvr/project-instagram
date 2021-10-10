import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Post from './Post'
import Stories from './Stories'

const RightPart = () => {
    // State
    const[posts,setPosts] = useState([])

    // Fecthing Posts 

    const getPost = async () => {
        let uri = 'http://localhost:3001/posts'
        const res = await fetch(uri)
        const resPosts = await res.json()
        setPosts(resPosts)
      }

    useEffect(()=>{
    getPost()
    },[])

    return (
        <StyledRight>
            <Stories/>
            {posts.map(post=> <Post key={post.id} data={post}/>)}
        </StyledRight>
    )
}
const StyledRight = styled.div`
width: 615px;
min-height: 700vh;
background: skyblue;
margin-left: 3rem;
`

export default RightPart
