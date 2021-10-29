import React from 'react'
import styled from 'styled-components'
import profile from '../../../../svg/profile.svg'
import save from '../../../../svg/save.svg'
import setting from '../../../../svg/setting.svg'
import switchIcon from '../../../../svg/switch.svg'
import { saveLoginDetail } from '../../../utils'
// Action 
import logout from '../../../../actions/logout'
// Redux
import { useSelector,useDispatch } from 'react-redux'

const ProfileOption = ({ profileClicked, setProfileClicked }) => {
  const dispatch = useDispatch()

  // User
  // const user = useSelector((state) => state.user)

  // Handlers
  const exitHandler = (e) => {
    if (e.target.id === 'wraper') {
      setProfileClicked(false)
    }
  }
  // Log out
  const logOutHandler = () => {
    saveLoginDetail('')
    dispatch(logout())
  }


  return (
    profileClicked && (
      <StyledModal id="wraper" onClick={exitHandler}>
        <Content>
          <div>
              <img src={profile} alt="" />Profile
          </div>
          <div>
              <img src={save} alt="" />Saved
          </div>
          <div>
              <img src={setting} alt="" />Setting
          </div>
          <div>
              <img src={switchIcon} alt="" />Switch Accounts
          </div>
          <div onClick={logOutHandler}>
              Log Out
          </div>

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
`

const Content = styled.div`
  position: absolute;
  top: 56px;
  right: 100px;
  width: 230px;
  height: 195px;
  display: flex;
  border: solid 1px #ccc;
  border-radius: 0.3rem;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: .1rem .5rem;
  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    padding: .65rem;
    font-size: 14px;
    cursor: pointer;
    font-weight: 400;
    color: #262626;
    /* background: skyblue; */
    &>img{
        width: 16px;
        margin-right: 1rem;
    }
  }

  &>div:last-child{
      border-top: 1.5px solid #dbdbdb;
      padding: 0;
      padding-top: .5rem;
      padding-left: 1rem;
      width: 230px
  }
`

export default ProfileOption
