import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, getByRole, render, screen } from '@testing-library/react'
import Button from '../index'

describe('Button component', () => {
  it('should match the snapshot', () => {
    const wrapper = render(<Button />)
    expect(wrapper).toMatchSnapshot()
  })
})