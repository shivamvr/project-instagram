import React from 'react'
import styled from 'styled-components'

const Story = () => {
    return (
        <StyledStory>
            <ColorBorder>
              <img src="/image/avatar.jpg" alt="" />
            </ColorBorder>
            <p>Shivam</p>
        </StyledStory>
    )
}

const StyledStory = styled.div`
width: 80px;
height: 85px;
/* border: solid 1px #000;  */
display: flex;
flex-direction: column;
align-items: center;

&>p{
    color: #262626;
    font-weight: 400;
    font-size: 12px;
}

`
const ColorBorder = styled.div`
 width: 64px;
 height: 64px;
 border: pink;
 display: flex;
 background: linear-gradient(to right, #C53293, #F99C4B);
 justify-content: center;
 align-items: center;
 border-radius: 50%;
 overflow: hidden;
 padding: 2px;
 margin-bottom: 2px;
 transform: rotate(110deg);
 &>img{
     width: 100%;
     height: 100%;
     object-fit: cover;
     border-radius: 50%;
     border: 2px solid #fff;
     transform: rotate(-110deg);
 }
`

export default Story
