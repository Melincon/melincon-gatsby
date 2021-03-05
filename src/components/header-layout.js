import React from "react"
import {Container, Divider} from 'semantic-ui-react'
import HeaderMenu from './header-menu'

export default function HeaderLayout() {
    return(
        <Container>
            <br />
            <HeaderMenu></HeaderMenu>
            <Divider />
        </Container>
    )
}