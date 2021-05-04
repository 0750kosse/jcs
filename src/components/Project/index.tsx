import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../mediaqueries'
import { ProjectProps } from '../../types'
import Button from '../Button'

const Content = styled.div`
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
margin:-2rem 0 3rem;
width:90%;
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
height:28rem;
`}
`

const Header = styled.h2`
margin-bottom: 0;
padding: 0 .5rem;
`
const SubHeader = styled.h3`
padding: 0 .5rem;
font-weight:100;
${mediaQueries('xl')`
height:9rem;
`}
`

const Paragraph = styled.h4`
padding: 0 .5rem;
${mediaQueries('tablet')`
height:3rem;
`}
`
const ButtonWrapper = styled.div`
display:flex;
flex-direction:column;
margin-bottom:1rem;
`

export default (props: ProjectProps) => {
  const { header, subheader, stack, demo, github } = props
  return (
    <Content className="project__wrapper--item" >
      <Header>{header}</Header>
      <SubHeader>{subheader}</SubHeader>
      <Paragraph>{stack}</Paragraph>
      <ButtonWrapper>
        <Button href={demo} target="_blank" rel="noopener" ctaText="Live Demo" />
        <Button href={github} target="_blank" rel="noopener" ctaText="GitHub" />
      </ButtonWrapper>

    </Content>
  )
}