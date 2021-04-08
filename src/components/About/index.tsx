import React from 'react'
import styled from 'styled-components'
import { AboutSection } from '../../types'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 2rem;
background:black;
color:white;
height: 25rem;
`
const Title = styled.h1``
const Info = styled.p`
font-size: 20px;
padding:0 1rem;
`

export default (props: AboutSection) => {
  const { title, description } = props
  return (
    <Container>
      <Title>{title}</Title>
      <Info>{description}</Info>
    </Container>
  )
}
