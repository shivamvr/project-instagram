import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import Photo from './Photo'

const PhotoGrid = ({userId}) => {
       const[posts,setPosts] = useState([])

    // Fecthing Posts 

    const getPost = async () => {
        let uri = `http://localhost:3001/posts?userid=${userId}`
        const res = await fetch(uri)
        const resPosts = await res.json()
        setPosts(resPosts)
      }

    useEffect(()=>{
    getPost()
    },[])

    return (

        <StyledGrid>
            {posts.map(post => <Photo userId={userId} key={post.id} post={post}/>)}
        </StyledGrid>
    )
}

const StyledGrid = styled.div`
background: pink;
width: 100%;
height: 100%;
padding: 2rem;
display: grid;
justify-content: center;
grid-template-columns: repeat(3, 295px);
grid-gap: 30px;
&>div{
  height: 295px;
}
`

export default PhotoGrid
