import React from 'react'
import styled from 'styled-components'
import { ProfileProps } from '../../types'
import Button from '../Button'
import ProfilePic from '../../lib/images/profilePic.jpeg'
import { mediaQueries } from '../../mediaqueries'
import { scroller } from 'react-scroll'
import Cv from '../../lib/files/CV.pdf'

const ColToRow = styled.div`
display:flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width:100%;
${mediaQueries('tablet')`
flex-direction: row;
width: 70%;
margin-left:25%;
`}
`

const Container = styled.div`
display:flex;
flex-direction: column;
margin-bottom:1rem;
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
margin:0 auto;
`
const scrollToForm = () => {
  scroller.scrollTo("contact-form", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  })
}

const CvDownload = (e: any) => {
  e.preventDefault();
  window.open(Cv, '_blank')
}

export default ({ header, subheader, cta, ctaText, id }: ProfileProps) => {
  return (
    <Container id="home">
      <Header className="profile__header">{header}</Header>
      <Image src={ProfilePic} />
      <SubHeader>{subheader}</SubHeader>
      <ColToRow className="profile__button">
        <Button ctaText="Contact" type="primary" onClick={scrollToForm}></Button>
        <Button ctaText="Download CV" onClick={CvDownload}></Button>
      </ColToRow>
    </Container >
  )
}

