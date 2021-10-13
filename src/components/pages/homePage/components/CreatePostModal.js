import React, { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'

// Redux
import { useSelector } from 'react-redux'

const CreatePostModal = ({ createClicked, setCreateClicked }) => {
  // State
  const [caption, setCaption] = useState('')
  const [imageLink, setImageLink] = useState('')
  // User
  const user = useSelector((state) => state.user)
  // Handlers
  const exitHandler = (e) => {
    if (e.target.id === 'wraper') {
      setCreateClicked(false)
    }
  }

  const captionHandler = (e) => {
    setCaption(e.target.value)
  }
 
  const imageLinkHandler = (e) => {
    setImageLink(e.target.value)
  }

  // Create Post
  const submitHandler = async () => {
    const post = {
      image: imageLink,
      text: caption,
      userId: user.id,
      id: uuid(),
    }
    if (post.image) {
      await fetch('http://localhost:3001/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: { 'Content-Type': 'application/Json' },
      })
      setCreateClicked(false)
    } else {
      alert('image is required')
    }
  }

  return (
    createClicked && (
      <StyledModal id="wraper" onClick={exitHandler}>
        <Content>
          <StyledTextArea>
            <textarea
              onChange={captionHandler}
              value={caption}
              placeholder="Write a caption..."
            />
          </StyledTextArea>

          <StyledFileInput>
            {/* <input type="file" /> */}
            <input
              onChange={imageLinkHandler}
              value={imageLink}
              type="text"
              placeholder="image link"
            />
          </StyledFileInput>
          <button onClick={submitHandler}>submit</button>
        </Content>
      </StyledModal>
    )
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
  width: 600px;
  height: 500px;
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

const StyledTextArea = styled.div`
  width: 100%;
  height: 6rem;
  & > textarea {
    width: 100%;
    height: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
  }
`

const StyledFileInput = styled.div`
  width: 100%;
  & > input {
    width: 100%;
  }
`

export default CreatePostModal
