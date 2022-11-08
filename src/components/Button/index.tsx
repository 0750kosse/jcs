import React from 'react'
import styled from 'styled-components'
import { ButtonProps } from '../../types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const Button = styled.a`
background: ${props => props.type === 'primary' ? "red" : "black"};
color:whitesmoke;
box-shadow:${props => props.type === 'primary' ? "rgb(0 0 0 / 35%) 0px 5px 15px" : "none"}; 
border:${props => props.type === 'primary' ? "1px solid transparent" : "none"};
display: ${props => props.type === 'primary' ? "block" : "flex"};
width:12rem;
height:3rem;
line-height:2.5;
text-align:center;
border-radius:5px;
font-size: 20px;
text-decoration:none;
margin-bottom:.5rem;
align-items: baseline;
justify-content:space-between;
padding: 0 .5rem;
cursor : pointer;
&:hover {
  cursor: pointer;
  text-decoration: underline;
  background:${props => props.type === 'primary' ? "#f2436f" : "#5b5254"};
}
`

const ExternalLinkIcon = styled(FontAwesomeIcon)`
color: ${props => props.type === 'primary' ? "transparent" : "grey"};
margin-right: 1rem;
&:hover {
  color:${props => props.type === 'primary' ? "transparent" : "black"};
}
`

export default ({ href, ctaText, type, id, onClick }: ButtonProps) => {
  return (
    <Button
      aria-label="button"
      href={href}
      type={type}
      id={id}
      onClick={onClick}
    >
      {ctaText}
      <ExternalLinkIcon type={type} icon={faExternalLinkAlt} />
    </Button>
  )
}
