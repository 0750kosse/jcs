import React from 'react'
import Contact from '../index'
import { render } from '@testing-library/react'

describe('Contact screen', () => {
  it('should render correclty', () => {
    const wrapper = render(<Contact />)
    expect(wrapper).toMatchSnapshot()
  })
})