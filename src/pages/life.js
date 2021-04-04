import React from "react"
import { Link, graphql } from "gatsby"
import { Text } from "grommet"

import styled from "styled-components"

import * as colors from "../../colors"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const LifeIndex = styled(({ className, data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout className={className} location={location} title={siteTitle}>
      <SEO
        title="My Life"
        keywords={["blog", "gatsby", "javascript", "react"]}
      />
      {posts.map(({ node }, i) => {
        const title = node.frontmatter.title || node.fields.slug
        const isLife = node.frontmatter.tags === "Books"
        return (
          <>
            {isLife && (
              <div key={i}>
                <div>
                  <Text className="post-title">
                    <Link style={{ boxShadow: "none" }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </Text>
                </div>

                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )}
          </>
        )
      })}
    </Layout>
  )
})``

export default LifeIndex

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
            tags
          }
        }
      }
    }
  }
`
