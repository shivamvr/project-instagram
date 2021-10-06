import React from 'react'
import styled from 'styled-components'
import more from './../../../../svg/more.svg'
import smile from './../../../../svg/smile.svg'
import save from './../../../../svg/save.svg'
import like from './../../../../svg/heart.svg'
import message from './../../../../svg/message.svg'
import share from './../../../../svg/chat.svg'

const Post = () => {
    return (
        <StyledPost>
            <StyledUserBar>
               <div>
                   <img src="/image/avatar.jpg" alt="" />
                   <p>care_one_no</p>
               </div>
               <div>
                   <img src={more} alt="" />
               </div>
            </StyledUserBar>

            <PostImage>
                <img src="/image/image.jpg" alt="" />
            </PostImage>

            <PostReaction>
                <div>
                    <img src={like} alt="" />
                    <img src={message} alt="" />
                    <img src={share} alt="" />
                </div>

                <div>
                     <img src={save} alt="" />
                </div>

            </PostReaction>

            <PostInfo>
                <div>
                    5,034 likes
                </div>
                <div>
                    cares_one_no <span>Don't worry!</span>
                </div>
                <div>
                    View all 30 comments
                </div>
                <div>
                    5 hour ago
                </div>
            </PostInfo>

            <PostComment>
                <img src={smile} alt="" />
                <input type="text" placeholder='Add a comment...' />
                 <button>Post</button>
            </PostComment>
            
        </StyledPost>
    )
}
const StyledPost = styled.div`
width: 100%;
height: 1070px;
border: green 3px dashed ;


`
export default Post
