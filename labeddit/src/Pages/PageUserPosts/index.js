import React from 'react'
import Styled from 'styled-components'
import CreatePost from '../../Components/CreatePost'
import FeedPostsTeste from '../../Components/PostFeed'


const Container = Styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`





export default function Post() {
    return (
        <Container>
            <CreatePost/>
            <FeedPostsTeste />
            <FeedPostsTeste />
            <FeedPostsTeste />
        </Container>
    )
}
