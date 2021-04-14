import React from 'react';
import Info from '../../components/Info'
import Form from '../../components/Form'
import { contact } from '../../lib/data'

export default () => {
  return (
    <>
      <Info
        title={contact.title}
        description={contact.description} />
      <Form />
    </>

  )
}