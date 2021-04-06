import React from "react"
import { Link } from "gatsby"
import { Box, Text } from "grommet"

import styled from "styled-components"

import "../../global.css"

const Header = styled(({ className, title }) => (
  <Box flex direction="row" className={className} align="center">
    <Box flex={{ grow: 1 }}>
      <Text>
        <Link className="nav nav-main" to={`/`}>
          CHRIS HERRERA
        </Link>
      </Text>
    </Box>

    <Box direction="row" gap="15px">
      <Link className="nav" to="/about">
        About
      </Link>
      <Link className="nav" to="/life">
        Life
      </Link>
      <Link className="nav" to="/book">
        Book Notes
      </Link>
    </Box>
  </Box>
))`
  padding: 20px 0 40px 0;
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
  max-width: 45%;
  padding: 50px 20px;
`

export default Layout
