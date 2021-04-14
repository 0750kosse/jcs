import React from 'react'
import Button from '../Button'
import styled from 'styled-components'

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
const SubmitButton = styled(Button)`
width: 15rem;
`

export default () => {
  return (
    <>
      <Form id="contact">
        <Label htmlFor="name" className="visuallyhidden"></Label>
        <Input id="name" type="text" name="textfield" placeholder="Name..." />
        <Label htmlFor="email" className="visuallyhidden"></Label>
        <Input id="email" type="text" name="textfield" aria-describedby="email-address" aria-invalid="true" placeholder="Email..." />
        {/* <span id="username-help-text">There was an error with the input above.</span> */}
        <Label htmlFor="message" className="visuallyhidden"></Label>
        <TextArea id="message" name="messagetext" placeholder="Leave your message..."></TextArea>
        <SubmitButton type="submit" value="Submit">Send message</SubmitButton>
      </Form>
    </>
  )
}


