import React from "react"
import Layout from '../components/layout'
import { Grid, Card, Button, Header } from 'semantic-ui-react'
import {graphql} from 'gatsby'

//add travisclaus.com and sapporosapporo.com
export default function Sites({data}) {
    var nodeArray = []
    data.allMarkdownRemark.edges.map(({node}) => (
        nodeArray.push(node)
    ))
    var splicedNodeArray = []
    while (nodeArray.length) {
        splicedNodeArray.push(nodeArray.splice(0,3))
    }
    return (
        <Layout>
            <Header>{data.allMarkdownRemark.totalCount} sites</Header>
            <Grid centered>
                {splicedNodeArray.map((splice) => (
                    <Grid.Row>
                        <Card.Group>
                            {splice.map((info) => (
                                <Card>
                                    <Card.Content>
                                        <Card.Header href={info.frontmatter.href} target="_blank" rel="noopener noreferrer">{info.frontmatter.title}</Card.Header>
                                        <Card.Meta>{info.frontmatter.catagory}</Card.Meta>
                                        <Card.Description>{info.internal.content}</Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <div className='ui two buttons'>
                                            <Button basic color='green' target="_blank" rel="noopener noreferrer">
                                                Analytics
                                            </Button>
                                            <Button basic color='blue' href={info.frontmatter.github} target="_blank" rel="noopener noreferrer">
                                                Github (source)
                                            </Button>
                                        </div>
                                    </Card.Content>
                                </Card>
                            ))}
                        </Card.Group>
                    </Grid.Row>
                ))}
            </Grid>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "site-post"}}}) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              href
              type
              title
              catagory
              github
              stats
            }
            internal {
                content
              }
          }
        }
      }
  }
`

                   