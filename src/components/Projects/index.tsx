import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../mediaqueries'
import { ProjectProps } from '../../types'
import { projects } from '../../lib/data'
import Button from '../Button'

const Content = styled.div`
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
margin:-2rem 0 4rem;
width:90%;
height:24rem;
background:white;
border-radius: 15px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
${mediaQueries('tablet')`
width:45%;

margin-bottom: 6rem;
margin-top:-4rem;
`}
${mediaQueries('medium')`
margin-top:-8rem;
margin-bottom:10rem;
`}
${mediaQueries('xl')`
width:20%;
`}
`

const Header = styled.h2``
const SubHeader = styled.h3``
const Paragraph = styled.h4``

export default (props: ProjectProps) => {
  const { header, subheader, stack, demo, github } = props
  return (
    <Content className="project__wrapper--item">
      <Header>{header}</Header>
      <SubHeader>{subheader}</SubHeader>
      <Paragraph>{stack}</Paragraph>
      <Button src={demo}>Live Demo</Button>
      <Button>Github</Button>
    </Content>
  )
}