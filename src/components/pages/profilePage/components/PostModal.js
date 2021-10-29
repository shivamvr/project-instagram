import React from 'react'
import styled from 'styled-components'
import PostInfo from '../../homePage/components/PostInfo'
import PostReaction from '../../homePage/components/PostReaction'
import UserBar from '../../homePage/components/UserBar'

const PostModal = ({setPostClicked,post,user}) => {
    console.log('modal user:', user)
    console.log('modal post:', post)
    // Handlers
  const exitHandler = (e) => {
    if (e.target.id === 'postModal') {
        setPostClicked(false)
    }
  }
    return (
        <StyledModal id="postModal" onClick={exitHandler}>
        <Content>
            <div className='postPicture'>
                <img src={post.image} alt="" />
            </div>
            <div className='postInfo'>
                <UserBar user={user}/>
                 <div className='comments'>
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nihil quia praesentium soluta cum impedit quibusdam excepturi obcaecati corrupti recusandae.
                </div>
                <PostInfo/>
                <PostReaction/>
            </div>
        </Content>
      </StyledModal>
    )
}

const StyledModal = styled.div`
  z-index: 12;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`

const Content = styled.div`
  width: fit-content;
  height: 530px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #ccc;
  border-radius: 0.5rem;
  background: #fff;
  overflow: hidden;
  & > div {
    border: 1px solid purple;
}
&>.postPicture{
    width: fit-content;
    height: 100%;
    background: pink;
    &>img{
        height: 100%;
        width: auto;
    }
  }
  &>.postInfo{
    width: 500px;
    height: 100%;
    padding: .5rem;
    &>.comments{
      width: 100%;
      height: 220px;
      background: #ccc;
    }
  }
  `

export default PostModal
