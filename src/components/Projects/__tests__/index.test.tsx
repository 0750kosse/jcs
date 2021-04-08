import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Projects from '../index'

describe('Projects component', () => {
  it('should match the snapshot', () => {
    const wrapper = render(<Projects />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should contain h2, h3 and h4', () => {
    const wrapper = render(<Projects />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(2)
  })
  it('should contain text', () => {
    const { getByText } = render(<Projects />)
    expect(getByText('Live Demo')).toBeInTheDocument()
  })
})