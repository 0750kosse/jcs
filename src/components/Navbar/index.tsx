import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../mediaqueries'

const Navigation = styled.nav`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
${mediaQueries('tablet')`
flex-flow:row nowrap;
height:8rem;
`}
`
const Title = styled.h2`
${mediaQueries('tablet')`
width:100%;
margin-left:1rem;
`}
`

const List = styled.ul`
display:flex;
flex-flow: row nowrap;
justify-content: space-evenly;
width: 100%;
padding:0;
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




