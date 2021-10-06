import React from 'react'
import styled from 'styled-components'
import more from './../../../../svg/more.svg'
import smile from './../../../../svg/smile.svg'
import save from './../../../../svg/save.svg'
import like from './../../../../svg/heart.svg'
import message from './../../../../svg/message.svg'
import share from './../../../../svg/chat.svg'

const Post = () => {
  return (
    <StyledPost>
      <StyledUserBar>
        <div className="userBox">
          <img src="/image/avatar.jpg" alt="" />
          <p>care_one_no</p>
        </div>
        <div className="option">
          <img src={more} alt="" />
        </div>
      </StyledUserBar>

      <PostImage>
        <img src="/image/image.jpg" alt="" />
      </PostImage>

      <PostReaction>
        <div>
          <img src={like} alt="" />
          <img src={message} alt="" />
          <img src={share} alt="" />
        </div>

        <div>
          <img src={save} alt="" />
        </div>
      </PostReaction>

      <PostInfo>
        <div className="post-likes">5,034 likes</div>
        <div className="post-text">
          cares_one_no <span>Don't worry!</span>
        </div>
        <div className="post-comments">View all 30 comments</div>
        <div className="post-time">5 hours ago</div>
      </PostInfo>

      <PostComment>
        <div>
          <img src={smile} alt="" />
        </div>
        <input type="text" placeholder="Add a comment..." />
        <button>Post</button>
      </PostComment>
    </StyledPost>
  )
}
const StyledPost = styled.div`
  width: 100%;
  height: 1070px;
  border: #ccc 1.5px solid;
  background: #fff;
  margin-top: 2rem;
`

const StyledUserBar = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  border: solid 1px #ccc;
  border-radius: 0.2rem;

  .userBox {
    display: flex;
    width: 50px;
    align-items: center;
    padding: 0 0.5rem;
    & > img {
      width: 100%;
      border-radius: 50%;
    }
    & > p {
      color: #262626;
      font-weight: 500;
      font-size: 90%;
      margin-left: 1rem;
      cursor: pointer;
    }
  }
  .option {
    margin: auto 0;
    margin-right: 0.6rem;
    width: 2rem;
    & > img {
      width: 100%;
    }
  }
`
const PostImage = styled.div`
  width: 100%;
  height: 740px;
  & > img {
    width: 100%;
  }
`
const PostReaction = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid #ccc 1px;
  padding: 1rem;
  & > div {
    border: solid;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 8rem;
    height: 2rem;
  }
  & > div + div {
    width: 2rem;
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
const PostInfo = styled.div`
  margin: 0.5rem 0;
  color: #262626;
  padding: 5px;
  font-size: 90%;
  & > div {
    border: solid 1px blue;
    margin-bottom: 6px;
  }
  .post-likes {
    margin-bottom: 1rem;
    background: pink;
  }
  .post-text {
    font-weight: 500;
    & > span {
      font-weight: 400;
    }
  }
  .post-comment {
    color: #8e8e8e;
  }
  .post-time {
    color: #8e8e8e;
    text-transform: uppercase;
    font-size: 85%;
  }
`

const PostComment = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border: solid #ccc 1px;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  & > div {
    width: 2rem;
  }
  & > div > img {
    border: solid red 2px;
    width: 100%;
  }
  & > input {
    color: #262626;
    width: 510px;
    height: 2.1rem;
    padding: 1rem;
    border: none;
    outline: none;
  }
  & > button {
    color: #0095f6;
    border: none;
    background: #fff;
    padding-left: 0.4rem;
  }
`
export default Post
