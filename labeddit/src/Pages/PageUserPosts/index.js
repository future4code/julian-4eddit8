import React from 'react'
import Styled from 'styled-components'
import Post from '../../Components/Post'
 

const Container = Styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`





export default function PagePost() {
    return (
        <Container>
           <Post />
        </Container>
    )
}
