import React, { useState } from 'react'
import styled from 'styled-components'
import video from '../../../../svg/video.svg'
import grid from '../../../../svg/grid.svg'
import PhotoGrid from './PhotoGrid'
import VideoGrid from './VideoGrid'

const Posts = ({userId}) => {
 const[activeItem,setActiveItem] = useState('photoGrid')
    return (
        <StyledPost>
           <Item>
               <div onClick={()=> setActiveItem('photoGrid')}>
                   <img src={grid} alt="" />
               </div>
               <div onClick={()=> setActiveItem('videoGrid')}>
                   <img src={video} alt="" />
               </div>
           </Item>
         {activeItem === 'photoGrid' ? 
          <PhotoGrid userId={userId}/>:
          <VideoGrid/>
         }
        </StyledPost>
    )
}
const StyledPost = styled.div`
margin-top: 2rem;
border: solid 2px skyblue;
width: 100%;
min-height: 100vh;
`
const Item = styled.div`
border: solid 2px pink;
width: 100%;
height: 52px;
display: flex;
justify-content: center;
align-items: center;
&>div{
    border: solid 1.5px #333;
    width: 4rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 3rem;
    cursor: pointer;
    &>:active{
        transform: scale(.95);
    }
    &>img{
        width: 30%;
    }
}
`

export default Posts
