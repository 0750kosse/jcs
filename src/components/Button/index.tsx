import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
background: black;
color:white;
width:8rem;
height:3rem;
border-radius:5px;
font-size: 20px;
`
export default (props: any) => {
  return (
    <Button aria-label="button">{props.children}</Button>
  )
}
