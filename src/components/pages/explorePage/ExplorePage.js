import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import ExplorePost from './ExplorePost'


const ExplorePage = () => {
       const[posts,setPosts] = useState([])

    // Fecthing Posts 

    const getPost = async () => {
        let uri = `https://json-web.herokuapp.com/posts`
        const res = await fetch(uri)
        const resPosts = await res.json()
        setPosts(resPosts)
      }

    useEffect(()=>{
    getPost()
    },[])

    return (
     <StyledExplore>
        <StyledGrid>
            {posts.map(post => <ExplorePost key={post.id} post={post}/>)}
        </StyledGrid>
     </StyledExplore>
    )
}

const StyledGrid = styled.div`
/* background: pink; */
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
const StyledExplore = styled.div`
width: 100%;
padding: 0 4.5rem;
`

export default ExplorePage
