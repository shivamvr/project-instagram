import React from 'react'
import styled from 'styled-components'
import Video from './Video'

const VideoGrid = () => {
    return (
        <StyledGrid>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
            <Video/>
        </StyledGrid>
    )
}

const StyledGrid = styled.div`
background: springgreen;
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

export default VideoGrid
