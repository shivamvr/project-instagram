import React from 'react'
import ProfileInfo from './components/ProfileInfo'
import styled from 'styled-components'
import Posts from './components/Posts'
import { useParams } from 'react-router'

const ProfilePage = () => {
    const { id } = useParams();
    return (
        <StyledPage>
            <ProfileInfo userId={id}/>
            <Posts userId={id}/>
        </StyledPage>
    )
}

const StyledPage = styled.div`
padding: 0 105px;
min-height: 200vh;
`

export default ProfilePage
