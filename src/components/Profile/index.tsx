import React from 'react'
import styled from 'styled-components'
import { ProfileProps } from '../../types'
import Button from '../Button'
import ProfilePic from '../../lib/images/profilePic.jpeg'
import { mediaQueries } from '../../mediaqueries'

const ColToRow = styled.div`
display:flex;
flex-direction: row;
justify-content: space-evenly;
width:100%;
${mediaQueries('tablet')`
width: 50%;
`}
`

const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
${mediaQueries('tablet')`
flex-flow:row wrap;
justify-content: space-evenly;
`}
`
const Header = styled.h1`
width:100%;
text-align: center;
`

const SubHeader = styled.h2`
margin: 2rem 1rem;
${mediaQueries('tablet')`
width:60%;
`}
`

const Image = styled.img`
max-width: 15rem;
height:15rem;
border-radius: 50%;
`

export default (props: ProfileProps) => {
  const { header, subheader, image, cta, ctaText } = props
  return (
    <Container>
      <Header className="profile__header">{header}</Header>
      <Image src={ProfilePic} />
      <SubHeader>{subheader}</SubHeader>
      <ColToRow className="profile__button">
        {ctaText && ctaText!.map((item: string, index: number) =>
          <Button key={index}>{item}</Button>
        )}
      </ColToRow>
    </Container>
  )
}

