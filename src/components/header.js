import React from 'react'
import Link from 'gatsby-link'
import Styled from 'styled-components'

import booksrus from '../images/booksrus_logo.png'

const HeaderWrapper = Styled.section`
  padding: 1.5em;
  text-align: center;
  display: grid;
  align-items: center;
  margin: 0 auto 2em auto;

  h1 {
    font-weight: 100;
    display: inline;
    margin-bottom: 0;
  }

  .nav {
    max-width: 650px;
    margin: 0 auto;
  }

  .link {
    font-size: 18px;
    margin-right: 16px;
  }

  .active {
    font-weight: bold;
    text-decoration: underline;
  }

  img {
    display: inline;
    height: 50px;
  }

  p {
    margin-bottom: 0;
  }
`

const Header = () => (
  <HeaderWrapper>
    <img
      src={booksrus}
      alt="booksrus logo"
      label="credit to Vadim Carazan"
      href="https://www.behance.net/gallery/59010695/Logo-Collection-II"
      target="_blank"
      rel="nofollow"
    />
    <h1>Books R Us</h1>
    <p>GraphCMS + Gatsby Ecommerce Starter</p>
    <nav className="nav">
      <Link to="/" exact className="link" activeClassName="active">
        Home
      </Link>
      <Link to="/page-2" className="link" activeClassName="active">
        Page 2
      </Link>
    </nav>
  </HeaderWrapper>
)

export default Header
