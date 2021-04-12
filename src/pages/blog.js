import React from "react"
import Layout from '../components/layout'
import { graphql} from "gatsby"
import {Container, Header, Grid} from 'semantic-ui-react'
import {navigate} from 'gatsby'


export default function Blog({ data }) {
    return (
        <Layout>
            <Header>{data.allMarkdownRemark.totalCount} Posts</Header>
            <br />
            <Grid divided='vertically'>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                      <Grid.Row key={node.id} onClick={() => navigate(node.fields.slug)}>
                          <Header>{node.frontmatter.title}{" "} — {node.frontmatter.date}</Header>
                          <Container text>{node.excerpt}</Container>
                      </Grid.Row>
                ))}
            </Grid>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: {frontmatter: {type: {eq: "blog-post"}}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`