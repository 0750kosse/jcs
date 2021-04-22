import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Project from '../index'

describe('Project component', () => {
  it('should match the snapshot', () => {
    const wrapper = render(<Project />)
    expect(wrapper).toMatchSnapshot()
  })
  it('should contain h2, h3 and h4', () => {
    const wrapper = render(<Project />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
  })
  it('should contain text', () => {
    const { getByText } = render(<Project />)
    expect(getByText('Live Demo')).toBeInTheDocument()
  })
})

