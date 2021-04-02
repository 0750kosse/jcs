import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Button from '../index'

describe('Button component', () => {
  it('should render', () => {
    const { getByRole } = render(<Button />)
    expect(getByRole('button')).toBeInTheDocument()
  })
})