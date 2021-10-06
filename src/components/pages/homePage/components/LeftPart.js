import React from 'react'
import styled from 'styled-components'

const LeftPart = () => {
    return (
        <StyledLeft>
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum laboriosam eligendi unde quibusdam. Rem nihil magnam ipsam unde velit, culpa nemo error esse, eaque distinctio sequi, quo modi dolorum eius.
            </div>
        </StyledLeft>
    )
}

const StyledLeft = styled.div`
width: 330px;
min-height: 600px;
height: 90vh;
background: pink;
position: relative;

&>div{
    background: #fff;
    position: fixed;
    border: .4rem solid;
    width: 330px;
    height: 90vh;
}

`

export default LeftPart
