import React from 'react'
import Projects from '../index'
import { render } from '@testing-library/react'

describe('Projects screen', () => {
  it('should render correclty', () => {
    const wrapper = render(<Projects />)
    expect(wrapper).toMatchSnapshot()
  })
})