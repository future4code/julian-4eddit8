import React from 'react'
import Styled from 'styled-components'


const CardPost = Styled.div`
    display:flex;
    flex-direction:column;
    justify-content:end;
    height: 20vh;
    width: 30vw;
    margin: 20px 0;
    border: 1px solid #000;
    text-align:center; 

`

const InputPost = Styled.div`
    height:70%;
    width: 100%;
    border-bottom:1px solid #000;
    

`

const Sendpost = Styled.div`
    height:30%;
    width: 100%;


`

export default function Post() {
    return (
            <CardPost>
                <InputPost>
                    Escreva Seu Post
                </InputPost>
                <Sendpost>
                    Postar
                </Sendpost>
            </CardPost>
        
    )
}
