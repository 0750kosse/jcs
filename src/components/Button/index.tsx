import React from 'react'
import styled from 'styled-components'
import { ButtonProps } from '../../types'

const Button = styled.a`
background: ${props => props.type === 'primary' ? "red" : "black"};
color:${props => props.type === 'primary' ? "black" : "white"};
box-shadow:${props => props.type === 'primary' ? "rgb(0 0 0 / 35%) 0px 5px 15px" : "none"}; 
border:${props => props.type === 'primary' ? "1px solid transparent" : "none"};
width:10rem;
height:3rem;
line-height:2.5;
text-align:center;
border-radius:5px;
font-size: 20px;
text-decoration:none;
margin-bottom:.5rem;
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
    </Button>
  )
}
