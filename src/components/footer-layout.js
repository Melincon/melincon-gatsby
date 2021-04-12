import React from "react"
import {Container, Grid} from 'semantic-ui-react'
import FooterMenu from '../components/footer-menu'
import { useSiteMetadata } from '../hooks/use-site-metadata'

//remember to thank <span>Photo by <a href="https://unsplash.com/@jonathan_christian_photography?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jonathan Riley</a> on <a href="https://unsplash.com/s/photos/nyc?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
//https://unsplash.com/@jonathan_christian_photography

//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default function FooterLayout() {
    const {author, tagLine} = useSiteMetadata()
    return (
        <Container>
            <Grid columns={3} verticalAlign='middle' centered>
                <Grid.Column width={3} textAlign="right">
                    {tagLine}
                </Grid.Column>
                <Grid.Column width={3} textAlign='center'>
                    <FooterMenu />
                </Grid.Column>
                <Grid.Column width={3} textAlign="left">
                    {author}
                </Grid.Column>
            </Grid>
        </Container>
    )
}

                    