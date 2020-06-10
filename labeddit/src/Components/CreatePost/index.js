import React from 'react'
import {useState} from 'react'
import Styled from 'styled-components'
import Button from '@material-ui/core/Button';

const CardPost = Styled.div`
    display:flex;
    flex-direction: column;
    text-align:center;
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

    const [postValue, setPostValue] = useState();

    const onClickSendPost = () => {
        const newPost = {
            post: postValue,
            title: ""

        }
        console.log(newPost)
        setPostValue('')
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
                    Cadastrar
                </Button>

                
            </Sendpost>
        </CardPost>

    )
}
