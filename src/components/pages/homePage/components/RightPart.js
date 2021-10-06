import React from 'react'
import styled from 'styled-components'
import Stories from './Stories'

const RightPart = () => {
    return (
        <StyledRight>
            <Stories/>
            
        </StyledRight>
    )
}
const StyledRight = styled.div`
width: 615px;
min-height: 700vh;
background: skyblue;
`

export default RightPart
