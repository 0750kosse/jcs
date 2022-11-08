import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavBarProps } from '../../types'
import { mediaQueries } from '../../mediaqueries'
import { Link } from 'react-scroll'

const Navigation = styled.nav<NavBarProps>`
display: flex;
flex-direction: column;
align-items: center;
max-width: 100%;
position: sticky;
top: 0;
background: white;
z-index:1;
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
const LinkScroller = styled(Link)`
margin: 0 10px;
padding: 0 10px;
line-height:2.5;
list-style-type: none;
border-bottom:5px solid transparent;
&.active {
  border-bottom:5px solid red;
}
&:hover {
  color: white;
  background: red;
  border-radius:5px;
}
`
const navBarTitles = ['home', 'projects', 'contact']
const navItems = navBarTitles.map(title => {
  return (
    <LinkScroller
      activeClass="active"
      to={title}
      spy={true}
      smooth={true}
      duration={500}
      offset={-440}
      key={title}
      className="nav-link">
      {title}
    </LinkScroller>
  )
})

const NavBar = (props: NavBarProps) => {
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

export default NavBar;



