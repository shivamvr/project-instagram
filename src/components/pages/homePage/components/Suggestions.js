import React from 'react'
import styled from 'styled-components'
import SuggestionDetail from './SuggestionDetail'


const Suggestions = () => {
    return (
        <StyledSuggestions>

            <StyledHead>
                <div>Suggestion For You</div>
                <div>See All</div>
            </StyledHead>

            <SuggestionDetail />
            <SuggestionDetail />
            <SuggestionDetail />
            <SuggestionDetail />
            <SuggestionDetail />
        </StyledSuggestions>
    )
}
const StyledSuggestions = styled.div`
width: 100%;
/* border: solid; */
margin-top: .3rem;
`
const StyledHead = styled.div`
/* border: solid blue; */
padding: 1rem 0;
display: flex;
font-size: 14px;
font-weight: 500;
justify-content: space-between;
&>div:first-child{
color: #8e8e8e;
font-weight: 500;
&+div{
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
}

}

`

export default Suggestions
