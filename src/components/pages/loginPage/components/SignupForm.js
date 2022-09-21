import React from 'react'
import styled from 'styled-components'
import { AiFillFacebook } from 'react-icons/ai'

const SignupForm = () => {
    return (
        <>
               <StyledForm>
            <Logo>
              <img src="/image/logo.png" alt="" />
            </Logo>
            <p>Sign up to see photos and videos from your friends.</p>
            <button> <AiFillFacebook/>Log in with Facebook</button>
            <StyledOr>
              <div></div>
              <p> or</p>
              <div></div>
            </StyledOr>
            <input type="text" placeholder="Phone Number or Email" />
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Sign up</button>

          </StyledForm>

          <StyledSinUp>
            Have an account?
            <span>&nbsp; Log in</span>
          </StyledSinUp>

        </>
    )
}



const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px #ccc solid;
  border: 5px purple solid;
  margin-bottom: 1rem;
  border-radius: 0.3rem;
  padding: 1rem 2.5rem;

  & > input,
  button {
    padding: 0.6rem 0.5rem;
    margin-bottom: 0.4rem;
    border-radius: 0.2rem;
    width: 100%;
    height: 2.4rem;
  }

  & > input {
    box-sizing: border-box;
    border: 1px #dbdbdb solid;
    color: #333;
    background: #fafafa;
    display: block;
    &::placeholder {
      color: #8e8e8e;
    }
  }

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background: #0095f6;
    border: none;
    outline: none;
    font-size: 0.95rem;
    cursor: pointer;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    &>svg{
      margin-right: .4rem;
      font-size: 1.3rem;
    }
  }

  & > p {
    color: #385185;
    border: solid;
    margin-top: 1rem;
    font-size: 90%;
  }
`

const StyledOr = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* border: solid red 1px; */
  width: 100%;
  margin-bottom: 2rem;
  & > div {
    width: 120px;
    height: 1.7px;
    background: #dbdbdb;
  }
  & > p {
    font-size: 90%;
    border: solid;
    margin: 0 1rem;
    text-transform: uppercase;
    color: #8e8e8e;
  }
`

const Logo = styled.div`
  border: 0.1rem solid gray;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  margin-bottom: .7rem;
  margin-top: 1.5rem;
  & > img {
    display: block;
    width: 60%;
  }
  &+p{
    color: #8e8e8e;
    font-size: 17px;
    text-align: center;
    font-weight: 500;
  }
`

const StyledSinUp = styled.div`
  border: solid 1px #ccc;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #262626;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
  & > span {
    color: #0095f6;
    font-weight: 500;
  }
`

export default SignupForm
