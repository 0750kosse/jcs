import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavBarProps } from '../../types'
import { mediaQueries } from '../../mediaqueries'

const Navigation = styled.nav<NavBarProps>`
display: flex;
flex-direction: column;
align-items: center;
max-width: 100%;
position: sticky;
top: 0;
background: white;

box-shadow: ${props => props.scrollY ? "0 14px 10px -6px black" : "none"};
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
flex-flow:row nowrap;
justify-content:space-evenly;
width:100%;
padding:0;
`
const Link = styled.li`
list-style-type: none;
`
const navBarTitles = ['about', 'projects', 'contact']
const navItems = navBarTitles.map(title => {
  let href = `${title} `
  return (
    <Link className="nav-item" key={title}>
      <a className="nav-link" href={href}> {title}</a>
    </Link>
  )
})


export default (props: NavBarProps) => {
  const [scrollY, setScrollY] = useState(0);

  function handleScroll() {
    setScrollY(window.pageYOffset)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navigation aria-label="Main Menu" scrollY={scrollY > 40} >
        <Title className="visuallyhidden">jose c. sanchez</Title>
        <List className="nav navbar-nav">
          {navItems}
        </List>
      </Navigation>
    </>
  )
}




