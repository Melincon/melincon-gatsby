import React from "react"
import {Segment, Divider, Form, Button, TextArea, Container, Message, Grid, Header } from 'semantic-ui-react'
import Layout from '../components/layout'


export default function Contact() {
    return (
        <Layout>
            <Segment>
                <Message>
                    <Grid textAlign="center">
                        <Grid.Row>
                            <Header size="huge" as="h1">
                                Contact
                            </Header>
                        </Grid.Row>
                        <Container>
                        </Container>
                    </Grid>
                </Message>
                <Divider />
                <Form action="https://getform.io/f/5d9575d7-3d80-4ce0-b208-75372a4a9c05" method="POST">
                    <Form.Group>
                        <Form.Input label='First name' placeholder='Trever' width={6} type="text" name="first-name" />
                        <Form.Input label='Middle name' placeholder='Jon' width={4} type="text" name="middle-name" />
                        <Form.Input label='Last name' placeholder='Klaus' width={6} type="text" name="last-name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input label='Email address' placeholder='this@that.com' width={10} type="email" name="email" />
                        <Form.Input label='Phone number' placeholder='(xxx)-xxx-xxxx' width={6} type="text" name="phone" />
                    </Form.Group>
                    <Form.Field
                        control={TextArea}
                        label="Information"
                        placeholder="Tell us something.."
                        type="text"
                        name="text-area"
                    />
                    <Form.Field
                        control={Button}
                        content='Confirm'
                        color='blue'
                        type="submit"
                    />
                </Form>
            </Segment>
        </Layout>
    )
}