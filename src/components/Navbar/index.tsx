import React from 'react'
import styled from 'styled-components'

const Navigation = styled.nav`
display: flex;
flex-direction: column;
align-items: center;
`
const Title = styled.h2``

const List = styled.ul`
display:flex;
flex-flow: row nowrap;
width: 100%;
justify-content: space-evenly;
`
const Link = styled.li`
list-style-type:none;
`

const navBarTitles = ['about', 'projects', 'contact']

const navItems = navBarTitles.map(title => {
  let href = `${title}`
  return (
    <Link className="nav-item" key={title}>
      <a className="nav-link" href={href}> {title}</a>
    </Link>
  )
})

export default function Navbar() {
  return (
    <>
      <Navigation aria-label="Main Menu">
        <Title className="visuallyhidden">jose c. sanchez</Title>
        <List className="nav navbar-nav">
          {navItems}
        </List>
      </Navigation>
    </>
  )
}




