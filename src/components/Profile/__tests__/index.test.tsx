import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import Profile from '../index'

describe('Profile component', () => {
  it('should match the snapshot', () => {
    const wrapper = render(<Profile />)
    expect(wrapper).toMatchSnapshot();
  })
  it('should render heading, subheading, image and 2 buttons text', () => {
    const ctaText = ['Learn More', 'Contact']
    const { getByText } = render(<Profile ctaText={ctaText} />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })
})