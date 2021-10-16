import React from 'react'
import styled from 'styled-components'

const Photo = () => {
    return (
        <StyledPhoto>
            PHOTO
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
`
export default Photo
