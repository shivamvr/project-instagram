import React from 'react'
import styled from 'styled-components'
import Suggestions from './Suggestions'
import LoggedProfile from './LoggedProfile'
import Footer from './Footer'
const LeftPart = () => {
    return (
        <StyledLeft>
            <div>
            <LoggedProfile/>
            <Suggestions/>
            <Footer/>
            </div>
        </StyledLeft>
    )
}

const StyledLeft = styled.div`
width: 330px;
min-height: 600px;
height: 90vh;
background: pink;
position: relative;
margin-left: 2rem;

&>div{
    margin-top: 2.5rem;
    background: #fff;
    position: fixed;
    border: .4rem solid;
    width: 330px;
    height: 90vh;
    padding:  0 .3rem;
}

`

export default LeftPart
