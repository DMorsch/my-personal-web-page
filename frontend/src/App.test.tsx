import { describe, it, expect, vi } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'
import { renderWithProviders } from './test/test-utils'

vi.mock('../api/hooks/comentarios', () => ({
  useGetComments: () => ({ data: [], isLoading: false, isError: false }),
  usePostComment: () => ({ mutate: vi.fn(), isPending: false, isError: false }),
}))

describe('<App /> routing', () => {
  it('renders the Home page at "/"', () => {
    renderWithProviders(<App />, { route: '/' })

    expect(screen.getByRole('heading', { name: 'Welcome!' })).toBeInTheDocument()
  })

  it('renders the About page at "/about"', () => {
    renderWithProviders(<App />, { route: '/about' })

    expect(screen.getByRole('heading', { name: 'About me' })).toBeInTheDocument()
  })

  it('renders the Comments page at "/comments"', () => {
    renderWithProviders(<App />, { route: '/comments' })

    expect(screen.getByRole('heading', { name: 'Leave a comment' })).toBeInTheDocument()
  })

  it('navigates between pages when the nav links are clicked', async () => {
    const user = userEvent.setup()
    renderWithProviders(<App />, { route: '/' })

    await user.click(screen.getByRole('link', { name: 'About' }))
    expect(screen.getByRole('heading', { name: 'About me' })).toBeInTheDocument()

    await user.click(screen.getByRole('link', { name: 'Comments' }))
    expect(screen.getByRole('heading', { name: 'Leave a comment' })).toBeInTheDocument()
  })
})
