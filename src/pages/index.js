import React from 'react'
import { Link, graphql } from 'gatsby'
import { Text } from 'grommet'

import styled from 'styled-components'

import * as colors from '../../colors'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'

const BlogIndex = styled(({ className, data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout className={className} location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <div>
              <Text className="post-title">
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </Text>
            </div>

            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        )
      })}
    </Layout>
  )
})`
  .post-title {
    font-weight: bold;
    font-size: 22px;
    background: linear-gradient(
      to bottom,
      rgba(255, 183, 3, 0.2) 0%,
      rgba(255, 183, 3, 0.2) 100%
    );
    border-bottom: 3px solid transparent;
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 0px 0px;
    transition: all 0.4s;
  }
  .post-title:hover {
    background-size: 4px 50px;
    border-bottom-color: ${colors.yellow};
  }
  a {
    color: #111111;
  }
`

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
