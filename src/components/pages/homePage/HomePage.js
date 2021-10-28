import React from 'react'
import styled from 'styled-components'
import LeftPart from './components/LeftPart'
import RightPart from './components/RightPart'

const HomePage = () => {
    return (
        <div>
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
