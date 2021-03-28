import React from 'react'
import { Link } from 'gatsby'
import { Box, Text } from 'grommet'

import styled from 'styled-components'

import { rhythm, scale } from '../utils/typography'

const Header = styled(({ className, title }) => (
  <Box flex direction="row" className={className} align="center">
    <Box flex={{ grow: 1 }}>
      <Text size="24px" weight="bold">
        <Link className="link" to={`/`}>
          CHRIS HERRERA
        </Link>
      </Text>
    </Box>

    <Box direction="row" gap="15px">
      <Link className="link" to="/about">
        {' '}
        About
      </Link>
      <Link className="link" to="/life">
        {' '}
        Life
      </Link>
      <Link className="link" to="/book">
        {' '}
        Book Notes
      </Link>
    </Box>
  </Box>
))`
  padding: 20px 0 40px 0;
  .link {
    text-decoration: none;
    border-bottom: 1px solid #fff;
    color: inherit;
    box-shadow: none;
    letter-spacing: 1px;
    transition: all 0.5s;
  }

  .link:hover {
    border-bottom: 1px solid #b1a7a6;
  }
`

const Layout = styled(({ className, location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <div className={className}>
      <Header title={title} />
      {children}
      <footer>
        © {new Date().getFullYear()}, Built by Chris
        {` `}
      </footer>
    </div>
  )
})`
  font-family: Montserrat;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

export default Layout
