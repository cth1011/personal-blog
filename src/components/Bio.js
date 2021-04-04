import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const Bio = styled(({ className }) => {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div className={className}>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
            />
            <p className="bio">
              Hi! I'm <strong>{author}</strong>, and I'm happy to welcome you to
              my blog. I'm currently working as a Web Engineer for Thinking
              Machines Data Science Inc, a data science startup in the
              Philippines. I post stuff about my learnings, side projects, and
              my life in general.
            </p>
          </div>
        )
      }}
    />
  )
})`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
  align-items: center;
  .bio {
    padding-top: 20px;
  }
`

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
