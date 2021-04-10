import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Info from '../index'

describe('About component', () => {
  const wrapper = render(<Info />)
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should contain a h1 and a p', () => {
    const title = 'Projects'
    const { getByText } = render(<Info title={title} />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })
})