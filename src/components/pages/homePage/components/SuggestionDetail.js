import React from 'react'
import styled from 'styled-components'

const SuggestionDetail = () => {
  return (
    <StyledDetail>
      <div>
        <img src="/image/avatar.jpg" alt="" />
        <div>
          <p>shivam verma454</p>
          <p>Follows you</p>
        </div>
      </div>
      <div>Follow</div>
    </StyledDetail>
  )
}

const StyledDetail = styled.div`
  width: 100%;
  height: 46px;
  border: solid 1px #8e8e8e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: solid red 2px;
    color: #262626;
    font-size: 14px;
    font-weight: 500;
    & > img {
      width: 32px;
      height: 32px;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
    &>div{
        &>p{
            font-size: 14px;
        }
        &>p+p{
            font-size: 12px;
            font-weight: 400;
            color: #8e8e8e;
        }
    }
  }

  & > div:last-child {
    color: #0095f6;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
  }
`

export default SuggestionDetail
