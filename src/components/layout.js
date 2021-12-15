import * as React from "react"
import styled from "styled-components"
import { Link, useStaticQuery, graphql } from "gatsby"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 30%;
  p {
    margin: 0px 10px 0px 10px;
  }
`

const NavBar = styled.nav`
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
`

const SiteLink = styled(Link)`
  text-decoration: none;
`

const LinkOut = styled.a`
  margin: 0px;
  text-decoration: none;
`

const Layout = (props) => {
  const {
    children
  } = props

  const data = useStaticQuery(graphql`
    query getSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <NavBar>
	<SiteLink to="/">{data.site.siteMetadata.title}</SiteLink>
	<SocialContainer>
	  <p>Nicky Forster</p>
	  <LinkOut href="https://twitter.com/nickyaforster">twitter</LinkOut>
	</SocialContainer>
      </NavBar>
      {children}
    </Container>
  )
}

export default Layout
