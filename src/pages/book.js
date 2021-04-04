import React from "react"
import { Link, graphql } from "gatsby"
import { Text } from "grommet"

import styled from "styled-components"

import * as colors from "../../colors"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const BookIndex = styled(({ className, data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout className={className} location={location} title={siteTitle}>
      <SEO
        title="Book Notes"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {posts.map(({ node }, i) => {
        const { tags, author, score, date, title } = node.frontmatter
        const postTitle = title || node.fields.slug
        const isBook = tags === "book"
        return (
          <>
            {isBook && (
              <div key={i} className="post-layout">
                <div className="book-section">
                  <img
                    className="book-cover"
                    alt="book-cover"
                    src={require(`../../content/blog${node.fields.slug}book-cover.png`)}
                  />
                </div>
                <div>
                  <div>
                    <Text className="post-title">
                      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                        {postTitle}
                      </Link>
                    </Text>
                  </div>
                  <div>
                    <small>
                      By {author} | ⭐ {score} / 5 | 🕛 {date}
                    </small>
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </div>
              </div>
            )}
          </>
        )
      })}
    </Layout>
  )
})`
  .post-layout {
    display: flex;
    flex-direction: row;
  }
  .book-section {
    margin-right: 20px;
    width: 190px;
  }
  .book-cover {
    max-height: 100%;
    max-width: 100%;
  }
`

export default BookIndex

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
            author
            score
          }
        }
      }
    }
  }
`
