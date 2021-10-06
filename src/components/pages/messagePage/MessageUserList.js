import React from 'react'
import MessageUser from './MessageUser'
import styled from 'styled-components'

const MessageUserList = () => {
    return (
        <StyldeUserList>
          <MessageUser/>            
          <MessageUser/>            
          <MessageUser/>            
          <MessageUser/>            
          <MessageUser/>            
        </StyldeUserList>
    )
}

const StyldeUserList = styled.div`
width: 200px;
height: 400px;
background: #e1e1e1;
overflow-y: scroll;
`

export default MessageUserList
