import React from 'react'
import { useDispatch} from 'react-redux'
import styled from 'styled-components'
import { AiFillFacebook } from 'react-icons/ai'
// Actions
import login from '../../../../actions/login'
const LoginForm = () => {

  const dispatch = useDispatch()
  const logInHandler = () => {
      dispatch(login())
  }
  
    return (
        <>
            <StyledForm>
            <Logo>
              <img src="/image/logo.png" alt="" />
            </Logo>
            <input type="text" placeholder="Phone number, username, or email" />
            <input type="password" placeholder="Password" />
            <button onClick={logInHandler}>Log In</button>
            <StyledOr>
              <div></div>
              <p> or</p>
              <div></div>
            </StyledOr>

            <StyledFb>
              <AiFillFacebook /> Log in with Facebook
            </StyledFb>

            <p>Forget password?</p>
          </StyledForm>

          <StyledSinUp>
            Don't have a account?
            <span>&nbsp; Sign up</span>
          </StyledSinUp>

        </>
    )
}


const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px #ccc solid;
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
    color: #fff;
    background: #0095f6;
    border: none;
    outline: none;
    font-size: 0.95rem;
    cursor: pointer;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
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
  border: solid red 1px;
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
  margin-bottom: 3rem;
  margin-top: 1.5rem;
  & > img {
    display: block;
    width: 60%;
  }
`

const StyledFb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #385185;
  font-weight: 500;
  & > svg {
    padding-right: 0.3rem;
    font-size: 190%;
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

export default LoginForm
