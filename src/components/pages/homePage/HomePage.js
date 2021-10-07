import React from 'react'
import styled from 'styled-components'
import LeftPart from './components/LeftPart'
import RightPart from './components/RightPart'
import Navbar from './components/Navbar'

const HomePage = () => {
    return (
        <div>
            <Navbar/>
             <Container>
             <RightPart/>
             <LeftPart/>
            </Container>
        </div>
    )
}
const Container = styled.div`
 display: flex;
 justify-content: center;
`

export default HomePage
