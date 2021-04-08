import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import About from '../index'

describe('About component', () => {
  const wrapper = render(<About />)
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should contain a h1 and a p', () => {
    const title = 'Projects'
    const { getByText } = render(<About title={title} />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })
})