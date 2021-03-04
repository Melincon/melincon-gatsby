import HeaderLayout from '../components/header-layout'
import FooterLayout from '../components/footer-layout'
import React from 'react'
import {Container, Divider} from 'semantic-ui-react'

export default function Layout({ children }) {
    return (
        <Container>
            <HeaderLayout />
            {children}
            <Divider />
            <FooterLayout />
        </Container>
    )
}