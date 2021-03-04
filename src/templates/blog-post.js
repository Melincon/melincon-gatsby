import React from "react"
import { graphql } from "gatsby"
import {Header, Container} from 'semantic-ui-react'
import Layout from '../components/layout'

export default function BlogPost({data}) {
    const post = data.markdownRemark
    return (
        <Layout>
            <Header>{post.frontmatter.title}</Header>
            <Container text dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`