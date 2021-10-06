import React from 'react'
import styled from 'styled-components'

const MessageUser = () => {
    return (
        <StyledUser>
            User name
            <p>name</p>
        </StyledUser>
    )
}
const StyledUser = styled.div`
 background: #fafafa;
 border: 1px #8e8e8e solid;
 margin: .4rem;
 padding: .2rem .6rem;
 border-radius: .2rem;
 color: #333;
 &>p{
     color: #8e8e8e;
 }
`
export default MessageUser
