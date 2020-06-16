import React from 'react'
import Styled from 'styled-components'
import Axios from 'axios'


const PostFeed = Styled.div`
    display:flex;
    flex-direction: column;
    justify-Content:center;
    align-items:center;

`
const CardPost = Styled.div`
    display:flex;
    flex-direction: column;
    justify-Content:center;
    align-items:center;

`



export default function Post() {

    const BaseURL = `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts`

    Axios.get(BaseURL, {
        
    })
    
    return (
            
        <PostFeed>
            <CardPost>
                sss
            </CardPost>              
            </PostFeed>
        
    )
}
