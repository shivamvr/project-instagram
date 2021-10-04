import React from 'react'
import styled from 'styled-components'
import { AiFillFacebook } from 'react-icons/ai'
const LoginPage = () => {
  return (
    <StyledLogin>
      <Container>
        <div className="left-side">
          <div>
            <div>
              <img src="/image/screen.jpg" alt="" />
            </div>
            <img src="/image/phone-frame.png" alt="" />
          </div>
        </div>

        <div className="right-side">

          <StyledForm>
          <Logo>
            <img src="/image/logo.png" alt="" />
          </Logo>
            <input type="text" placeholder="Phone number, username, or email" />
            <input type="password" placeholder="Password" />
            <button>Log In</button>
            <StyledOr>
              <div></div>
              <p> or</p>
              <div></div>
            </StyledOr>

            <StyledFb>
              {' '}
              <AiFillFacebook /> Log in with Facebook
            </StyledFb>

            <p>Forget password?</p>
          </StyledForm>

          <StyledSinUp>
            Don't have a account? 
            <span>&nbsp; Sign up</span>
          </StyledSinUp>

          <StoreBtns>
            Get the app.
            <div>
                <img src="/image/appstore.png" alt="" />
                <img src="/image/playstore.png" alt="" />
            </div>
          </StoreBtns>

        </div>
      </Container>
      <StyledFooter>
          <p>
            About Blog Jobs Help API Privacy Terms Top Accounts Hashtags
            Locations Instagram Lite
          </p>
          <p>
            Beauty Dance Fitness Food & Drink Home & Garden Music Visiual Arts
          </p>
          <p>©2021 Instagram from Facebook</p>
      </StyledFooter>
    </StyledLogin>
  )
}

const StyledLogin = styled.div``

const Container = styled.div`
  display: flex;
  border: solid springgreen;
  padding: 1rem;
  justify-content: center;

  .left-side,
  .right-side {
    border: solid;
    margin-top: 1rem;
}
.right-side {
    margin-top: 3.2rem;
    width: 390px;
    padding: 0;
  }

  .left-side {
    width: 500px;
    border: solid;
    & > div {
      position: relative;
      & > img {
        width: 100%;
        border: solid;
      }
      & > div {
        position: absolute;
        top: 100px;
        right: 65px;
        width: 268px;
        height: 435px;
        /* border: solid red .5px; */
        & > img {
          width: 100%;
          display: block;
        }
      }
    }
  }
`

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
    border: 1px #DBDBDB solid;
    color: #333;
    background: #FAFAFA;
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
border-radius: .2rem;
margin-bottom: 1rem;
&>span{
    color: #0095F6;
    font-weight: 500;
}
`

const StoreBtns = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: solid;
line-height: 3rem;
color: #333;

&>div{
    border: solid;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    &>img{
        cursor: pointer;
        width: 40%;
    }
}

`

const StyledFooter = styled.footer`

display: flex;
flex-direction: column;
align-items: center;
word-spacing: .6rem;
border: solid;
color: #8E8E8E;
font-size: 90%;

`

export default LoginPage
