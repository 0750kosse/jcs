import React from 'react'
import styled from 'styled-components'
import { ProfileProps } from '../../types'
import Button from '../Button'
import ProfilePic from '../../lib/images/profilePic.jpeg'

const ColToRow = styled.div`
display:flex;
flex-direction: row;
justify-content: space-evenly;
width: 100%;
`

const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
text-align: center;
`
const Header = styled.h1``

const SubHeader = styled.h2``

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

