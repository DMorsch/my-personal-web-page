import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'

import Header from './Header'
import { renderWithProviders } from '../../test/test-utils'

describe('<Header />', () => {
  it('renders the three navigation links with their routes', () => {
    renderWithProviders(<Header />)

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about')
    expect(screen.getByRole('link', { name: 'Comments' })).toHaveAttribute('href', '/comments')
  })

  it('marks the link for the current route as active', () => {
    renderWithProviders(<Header />, { route: '/about' })

    expect(screen.getByRole('link', { name: 'About' })).toHaveClass('active')
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveClass('active')
  })
})
