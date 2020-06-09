import React from 'react'
import Styled from 'styled-components'


const CardPost = Styled.div`
    display:flex;
    flex-direction:column;
    height: 25vh;
    width: 30vw;
    margin: 20px 0;
    border: 1px solid #000;
    text-align:center; 

`
const HeaderPost = Styled.div`
    border-bottom: 1px solid #000;
    height: 20%;
`
const MainPost = Styled.div`
    border-bottom: 1px solid #000;
    height: 60%;
`

const FooterPost = Styled.div`
    display: flex;
    justify-content: space-around;

`


export default function Post() {
    return (
            <CardPost>
                <HeaderPost>Fulano de Tal</HeaderPost>
                <MainPost>Post Texto - Lorem Lorem </MainPost>
                <FooterPost>
                <p>⬆️ 5 ⬇️</p>
                <p>Comentarios</p>
                </FooterPost>
            </CardPost>
        
    )
}
