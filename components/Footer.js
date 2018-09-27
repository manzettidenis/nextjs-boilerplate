'use strict'
import Link from 'next/link'
import styled from 'styled-components'

const linkStyle = {
  marginRight: 15
}

const Footer = styled.footer`
  background: #f1f1f1;
  width: 100%;
  height: 60px;
  padding: 10px;
`

export default () => (
  <Footer>
    <Link href='/'>
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href='/about'>
      <a style={linkStyle}>About Us</a>
    </Link>
    <Link href='/blog'>
      <a style={linkStyle}>Blog</a>
    </Link>
  </Footer>
)
