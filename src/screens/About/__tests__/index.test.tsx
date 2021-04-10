import React from 'react'
import About from '../index'
import { render } from '@testing-library/react'

describe('About screen', () => {
  it('should render correclty', () => {
    const wrapper = render(<About />)
    expect(wrapper).toMatchSnapshot()
  })
})