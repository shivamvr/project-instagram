import React from 'react'
import styled  from 'styled-components'
import Story from './Story'



const Stories = () => {
    return (
        <StyledStories>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
        </StyledStories>
    )
}

const StyledStories = styled.div`
width: 100%;
display: flex;
background: #fff;
border-radius: .3rem;
border: solid 2px #ccc;

`
export default Stories
