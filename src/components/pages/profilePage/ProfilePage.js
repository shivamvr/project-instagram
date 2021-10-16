import React from 'react'
import ProfileInfo from './components/ProfileInfo'
import styled from 'styled-components'
import Navbar from '../homePage/components/Navbar'
import Posts from './components/Posts'

const ProfilePage = () => {
    return (
        <StyledPage>
            <Navbar/>
            <ProfileInfo/>
            <Posts/>
        </StyledPage>
    )
}

const StyledPage = styled.div`
padding: 0 105px;
min-height: 200vh;
`

export default ProfilePage
