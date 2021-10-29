import React from 'react'
import styled from 'styled-components'
import save from './../../../../svg/save.svg'
import like from './../../../../svg/heart.svg'
import message from './../../../../svg/message.svg'
import share from './../../../../svg/chat.svg'
const PostReaction = () => {
    return (
        <StyledReaction>
        <div>
          <img src={like} alt="" />
          <img src={message} alt="" />
          <img src={share} alt="" />
        </div>

        <div>
          <img src={save} alt="" />
        </div>
      </StyledReaction>
    )
}


const StyledReaction = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid #ccc 1px;
  padding: 1rem;
  margin-top: .4rem;
  & > div {
    /* border: solid; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 7rem;
    height: 24px;
  }
  & > div + div {
    width: 24px;
  }
  & > div > img {
    height: 100%;
    width: 30%;
  }
  & > div + div > img {
    margin-right: 0rem;
    width: 100%;
  }
`

export default PostReaction
