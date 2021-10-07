import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <StyledFooter>
            <p>About . Help . Press . API . Jobs . Privacy . Terms . Locations.</p>
            <p>Top . Accounts . Hashtags . Language</p>
            <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
font-size: 11px;
font-weight: 400;
color: #C7C7C7;
border: solid;
margin-top: 2rem;
width: 100%;
line-height: 1rem;
&>p{
    word-spacing: .02rem;
}

&>p:last-child{
    margin-top: 1rem;
    word-spacing: auto;
}

`

export default Footer
