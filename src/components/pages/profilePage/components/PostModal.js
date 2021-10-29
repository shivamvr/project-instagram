import React from 'react'
import styled from 'styled-components'

const PostModal = ({postClicked,setPostClicked}) => {

    // Handlers
  const exitHandler = (e) => {
    if (e.target.id === 'postModal') {
        setPostClicked(false)
    }
  }
    return (
        <StyledModal id="postModal" onClick={exitHandler}>
        <Content>
            
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
  width: 940px;
  height: 530px;
  display: flex;
  border: solid 1px #ccc;
  border-radius: 0.5rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 2rem;
  & > div {
    border: 1px solid purple;
    padding: 1px;
    margin-bottom: 2rem;
  }
`

export default PostModal
