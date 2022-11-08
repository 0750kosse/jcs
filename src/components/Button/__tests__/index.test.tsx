import React from 'react'
import '@testing-library/jest-dom'
import {render } from '@testing-library/react'
import Button from '../index'

describe('Button component', () => {
  it('should match the snapshot', () => {
    const view = render(<Button />)
    expect(view).toMatchSnapshot()
  })
})