import React from 'react'
import ProfileInfo from './components/ProfileInfo'
import styled from 'styled-components'
import Navbar from '../homePage/components/Navbar'

const ProfilePage = () => {
    return (
        <StyledPage>
            <Navbar/>
            <ProfileInfo/>
        </StyledPage>
    )
}

const StyledPage = styled.div`
padding: 0 3rem;
`

export default ProfilePage
