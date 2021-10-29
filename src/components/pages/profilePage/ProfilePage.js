import React, { useState } from 'react'
import ProfileInfo from './components/ProfileInfo'
import styled from 'styled-components'
import Posts from './components/Posts'
import { useParams } from 'react-router'
import PostModal from './components/PostModal'

const ProfilePage = () => {
    const[postClicked,setPostClicked] = useState(true)
    const { id } = useParams();
    return (
        <StyledPage>
            
          {postClicked ? <PostModal postClicked={postClicked} setPostClicked={setPostClicked} />  : ''}
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
