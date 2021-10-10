import React from 'react'
import styled from 'styled-components'
const CreatePostModal = ({modalVisibility,setModalVisibility}) => {

    const exitHandler = (e) => {
        if(e.target.id === 'wraper'){
            setModalVisibility(false)
         }
    }
    

    return (
        modalVisibility &&
        <StyledModal id='wraper' onClick={exitHandler}>
            <Content>
           <StyledTextArea>
               <textarea placeholder='Write a caption...' />
           </StyledTextArea>

           <StyledFileInput>
               <input type="file" />
           </StyledFileInput>
            <button>submit</button>
            </Content>
        </StyledModal>
    )
}

const StyledModal = styled.div`
z-index: 12;
position: fixed ;
top: 0;
left: 0;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background: rgba(0,0,0,0.4);
`

const Content = styled.div`
 width: 600px;
 height: 500px;
 display: flex;
 border: solid 1px #ccc;
 border-radius: .5rem;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 background: #fff;
 padding: 2rem;
 &>div{
     border: 1px solid purple;
     padding: 1px;
     margin-bottom: 2rem; 
 }
`

const StyledTextArea = styled.div`
    width: 100%;
    height: 6rem;
&>textarea{
    width: 100%;
    height: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
}
`

const StyledFileInput = styled.div`
width: 100%;
&>input{
    width: 100%;
}
`



export default CreatePostModal
