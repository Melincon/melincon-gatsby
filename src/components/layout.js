import React from "react"
import {Container, Header} from 'semantic-ui-react'
import HeaderMenu from './header-menu'

export default function Layout(){
    return(
        <Container>
            <Header as='h1'>Melincon</Header>
            <HeaderMenu></HeaderMenu>
        </Container>
    )
}