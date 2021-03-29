import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NavBar from '../index'

describe('Navbar component', () => {
  it('should match the snapshot', () => {
    const wrapper = render(<NavBar />)
    expect(wrapper).toMatchSnapshot();
  })
  it('should render the website sections', () => {
    const { getByText } = render(<NavBar />)
    expect(getByText('about')).toBeInTheDocument()
    expect(getByText('projects')).toBeInTheDocument()
    expect(getByText('contact')).toBeInTheDocument()
  })
})