import React from 'react'
import styled from 'styled-components'

const PostInfo = ({text,likes}) => {
    return (
        <StyledInfo>
        <div className="post-likes">{likes} likes</div>
        <div className="post-text">
          cares_one_no <span>{text}</span>
        </div>
        <div className="post-comments">View all 30 comments</div>
        <div className="post-time">5 hours ago</div>
      </StyledInfo>
    )
}
const StyledInfo = styled.div`
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

export default PostInfo
