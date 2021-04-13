import React from 'react';
import Info from '../../components/Info'
import { contact } from '../../lib/data'

export default () => {
  return (
    <>
      <Info
        id={contact.title}
        title={contact.title}
        description={contact.description} />
    </>
  )
}