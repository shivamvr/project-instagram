import React from 'react'
import ProfileInfo from './components/ProfileInfo'
import styled from 'styled-components'
import Navbar from '../homePage/components/Navbar'
import Posts from './components/Posts'
import { useParams } from 'react-router'

const ProfilePage = () => {
    const { username } = useParams();
    return (
        <StyledPage>
            <Navbar />
            <ProfileInfo username={username}/>
            <Posts username={username}/>
        </StyledPage>
    )
}

const StyledPage = styled.div`
padding: 0 105px;
min-height: 200vh;
`

export default ProfilePage
