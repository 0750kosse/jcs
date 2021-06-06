import React from 'react'
import styled from 'styled-components'
import { InfoProps } from '../../types'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background:black;
color:white;
padding-bottom:2rem;
`

const Title = styled.h1``
const Info = styled.p`
font-size: 20px;
padding:0 1rem;
`

export default (props: InfoProps) => {
  const { title, description } = props
  return (
    <Container>
      <Title>{title}</Title>
      <Info>{description}</Info>
    </Container>
  )
}
