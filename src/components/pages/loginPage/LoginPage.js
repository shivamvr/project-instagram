import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import LoginForm from './components/LoginForm'
const LoginPage = () => {
    const images = ['screen', 'screen1', 'screen2']
    const [currentImg, setCurrentImg] = useState(0)
    useEffect(() => {
        let i = 0; 
     setInterval(() => {
         if(i>2){
             i = 0
         }
        setCurrentImg(i)
        i++;
     }, 2000);
    }, [])

  return (
    <StyledLogin>
      <Container>
        <div className="left-side">
          <div>
            <div>
              <img src={`/image/${images[currentImg]}.jpg`} alt="" />
            </div>
            <img src="/image/phone-frame.png" alt="" />
          </div>
        </div>

        <div className="right-side">
          <LoginForm/>
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
          About Blog Jobs Help API Privacy Terms Top Accounts Hashtags Locations
          Instagram Lite
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
          transition: all ease-in 1s;
        }
      }
    }
  }
`

const StoreBtns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid;
  line-height: 3rem;
  color: #333;

  & > div {
    border: solid;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    & > img {
      cursor: pointer;
      width: 40%;
    }
  }
`

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  word-spacing: 0.6rem;
  border: solid;
  color: #8e8e8e;
  font-size: 90%;
`

export default LoginPage
