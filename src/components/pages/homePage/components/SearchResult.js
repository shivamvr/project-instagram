import React from 'react'
import styled from 'styled-components'
import UserDetail from './UserDetail'

const SearchResult = () => {
    return (
        <StyledResult>
            <UserDetail/>
            <UserDetail/>
            <UserDetail/>
            <UserDetail/>
            <UserDetail/>
        </StyledResult>
    )
}

const StyledResult = styled.div`
z-index: 5;
position: absolute;
top: 40px;
left: -80px;
width: 380px;
height: 365px;
background: #ccc;
border-radius: .4rem;
overflow-y: scroll;
`

export default SearchResult
