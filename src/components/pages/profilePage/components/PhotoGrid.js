import React from 'react'
import styled from 'styled-components'
import Photo from './Photo'

const PhotoGrid = () => {
    return (
        <StyledGrid>
            <Photo/>
            <Photo/>
            <Photo/>
            <Photo/>
            <Photo/>
            <Photo/>
            <Photo/>
            <Photo/>
            <Photo/>
            <Photo/>
            <Photo/>
            <Photo/>
            <Photo/>
        </StyledGrid>
    )
}

const StyledGrid = styled.div`
background: pink;
width: 100%;
height: 100%;
padding: 2rem;
display: grid;
grid-template-columns: repeat(3, 295px);
grid-gap: 30px;
&>div{
  height: 295px;
}
`

export default PhotoGrid
