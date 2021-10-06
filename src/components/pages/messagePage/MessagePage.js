import React from 'react'
import styled from 'styled-components'
import MessageChatBox from './MessageChatBox'
import MessageUserList from './MessageUserList'

const MessagePage = () => {
    return (
        <StyledMessagePage>
            <MessageUserList/>
            <MessageChatBox/>
        </StyledMessagePage>
    )
}

const StyledMessagePage = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100vh;
 &>div{
     border: solid pink;
 }
`

export default MessagePage
