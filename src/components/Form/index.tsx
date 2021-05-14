import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { mediaQueries } from '../../mediaqueries'
import emailjs from 'emailjs-com'

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem 1rem;
margin:0 auto;
width:90%;
background:white;
margin-top: -8rem;
border-radius: 15px;
`
const Label = styled.label``
const Input = styled.input`
height: 3rem;
border-radius: 9px;
width: 90%;
padding-left: 1rem;
margin: .5rem 0;
font-size: 18px;
border: 1px solid transparent;
box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
`
const TextArea = styled.textarea`
width: 90%;
height:10rem;
padding-left: 1rem;
font-size: 18px;
border: 1px solid transparent;
box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
border-radius: 9px;
margin-bottom:1rem;
`
const SubmitContainer = styled.div`
max-width: 85%;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin: 0 auto;
position: absolute;
right: 0;
left: 0;
width: 90vw;
padding: 3rem 0;
margin-top:-6rem;
background: #F5F5F5;
border-radius:15px;
box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
`
const SubmitHeader = styled.h1``
const SubmitMessage = styled.h3``
const SucessIcon = styled(FontAwesomeIcon)`
color:green;
`
const CloseModalButton = styled.button`
width:10rem;
height:3rem;
text-align:center;
border-radius:5px;
font-size: 20px;
text-decoration:none;
margin-top:1.5rem;
background:black;
color:white;
`

export default () => {
  const [isSubmitted, setSubmitted] = useState(false);

  function handleCloseModal(e: any) {
    setSubmitted(false)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  function sendEmail(e: any) {
    e.preventDefault();
    emailjs.sendForm('service_qf93yb8', 'template_hnhtb4n', e.target, 'user_iuCmDuV4amYXxZfJ3wjER')
      .then((result) => {
        setSubmitted(true)
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }
  return (
    <>
      {isSubmitted && (
        <SubmitContainer>
          <SubmitHeader>Thanks for reaching out!</SubmitHeader>
          <SucessIcon icon={faCheckCircle} size="3x"></SucessIcon>
          <SubmitMessage>I´ve received your message and will get back to you shortly!! </SubmitMessage>
          <CloseModalButton
            onClick={handleCloseModal}>Back To Top</CloseModalButton>
        </SubmitContainer>
      )
      }
      <Form className="contact-form" id="contact" onSubmit={sendEmail}>
        <Label htmlFor="name" className="visuallyhidden"></Label>
        <Input id="name" type="text" name="user_name" placeholder="Name..." required />
        <Label htmlFor="email" className="visuallyhidden"></Label>
        <Input id="email" type="text" name="user_email" aria-describedby="email-address" aria-invalid="true" placeholder="Email..." required />
        <Label htmlFor="message" className="visuallyhidden"></Label>
        <TextArea id="message" name="message" placeholder="Leave your message..." required></TextArea>
        <Input type="submit" value="Send message"></Input>
      </Form>
    </>
  )
}


