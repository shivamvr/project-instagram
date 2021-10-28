import React from 'react'
import styled from 'styled-components'

const ExplorePost = ({post}) => {
    return (
        <StyledPhoto>
            <img src={post.image} alt="" />
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
}
`
export default ExplorePost
