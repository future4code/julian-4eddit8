import React from 'react'
import {useState} from 'react'
import Styled from 'styled-components'
import Button from '@material-ui/core/Button';

import Axios from 'axios'

const CardPost = Styled.div`
    display:flex;
    flex-direction: column;
    justify-Content:center;
    align-items:center;
`

const InputPost = Styled.div`
    width: 30vw;
    height: 20vh;
` 

const InputTextarea = Styled.textarea`
    width: 100%;
    height: 80%; 
    text-align:justify;
    padding: 5px;

`

const Sendpost = Styled.div`
    
`



export default function Post() {

    const BaseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts"     

  

    const [postValue, setPostValue] = useState();

    const onClickSendPost = () => {
        const newPost = {
            post: postValue,
            title: ""

        }
      
    }



    return (
        <CardPost>
            <InputPost>
                <InputTextarea 
                value={postValue}
                onChange={e => setPostValue(e.target.value)}               
                ></InputTextarea>
            </InputPost>
            <Sendpost>
                <Button onClick={onClickSendPost}>
                    Enviar Post
                </Button>

                
            </Sendpost>
        </CardPost>

    )
}
