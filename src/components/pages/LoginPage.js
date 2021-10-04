import React from 'react'
import styled from 'styled-components'
const LoginPage = () => {
  return (
    <StyledLogin>
      <Container>
        <div className="left-side">
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              recusandae beatae doloribus accusantium harum optio iste a aut
              laboriosam sint quos ipsam ullam exercitationem laudantium
              dolorum, expedita porro fuga illum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              odit perspiciatis illum error, tenetur voluptatum atque nobis!
              Necessitatibus, debitis voluptate.
            </p>
          </div>
        </div>

        <div className="right-side">
          <div>
              <img src="/image/logo.png" alt="" />
          </div>

          <form>
            <input type="text" placeholder="Phone number, username, or email" />
            <input type="password" placeholder="Password" />
            <button>Log In</button>
            <div>
              <div></div>
              or
              <div></div>
            </div>
            <div>Log in with Facebook</div>
            <p>forget password?</p>
          </form>

          <div>
            Don't have a account? <span>Sign up</span>
          </div>

          <div>
            Get the app.
            <div className="download-btns">
              <button>AppStore</button>
              <button>PlayStore</button>
            </div>
          </div>
        </div>
      </Container>
      <footer>
        <div>
          <p>About Blog Jobs Help API Privacy Terms Top Accounts Hashtags Locations Instagram Lite</p>
           <p>Beauty Dance Fitness Food & Drink Home & Garden Music Visiual Arts</p>
           <p>© 2021 Instagram from Facebook</p>
        </div>
      </footer>
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
    margin: 2rem;
    padding: 1rem;
  }
  .right-side {
    width: 350px;
  }
  .left-side {
    width: 350px;
  }
`

export default LoginPage
