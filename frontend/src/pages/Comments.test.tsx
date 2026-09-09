import { describe, it, expect, vi, beforeEach } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Comments from './Comments'
import { renderWithProviders } from '../test/test-utils'
import { useGetComments, usePostComment } from '../../api/hooks/comentarios'
import type { Comment } from '../interface/comments'

vi.mock('../../api/hooks/comentarios', () => ({
  useGetComments: vi.fn(),
  usePostComment: vi.fn(),
}))

const mockedUseGetComments = vi.mocked(useGetComments)
const mockedUsePostComment = vi.mocked(usePostComment)

type GetResult = Partial<ReturnType<typeof useGetComments>>
type PostResult = Partial<ReturnType<typeof usePostComment>>

const setGetComments = (overrides: GetResult = {}) => {
  mockedUseGetComments.mockReturnValue({
    data: [],
    isLoading: false,
    isError: false,
    ...overrides,
  } as ReturnType<typeof useGetComments>)
}

const setPostComment = (overrides: PostResult = {}) => {
  const mutate = vi.fn()
  mockedUsePostComment.mockReturnValue({
    mutate,
    isPending: false,
    isError: false,
    ...overrides,
  } as ReturnType<typeof usePostComment>)
  return mutate
}

const buildComment = (overrides: Partial<Comment> = {}): Comment => ({
  name: 'Ada',
  message: 'Nice portfolio!',
  created_at: '2026-01-02T10:00:00Z',
  ...overrides,
})

beforeEach(() => {
  vi.clearAllMocks()
  setGetComments()
  setPostComment()
})

describe('<Comments />', () => {
  it('shows a loading message while comments are being fetched', () => {
    setGetComments({ isLoading: true, data: undefined })

    renderWithProviders(<Comments />)

    expect(screen.getByText('Loading comments...')).toBeInTheDocument()
  })

  it('shows an error message when the fetch fails', () => {
    setGetComments({ isError: true, data: undefined })

    renderWithProviders(<Comments />)

    expect(
      screen.getByText('Something went wrong loading comments. Please try again later.'),
    ).toBeInTheDocument()
  })

  it('shows an empty state when there are no comments', () => {
    setGetComments({ data: [] })

    renderWithProviders(<Comments />)

    expect(
      screen.getByText('No comments yet. Be the first to leave one!'),
    ).toBeInTheDocument()
  })

  it('renders fetched comments with a dd/mm/yyyy date', () => {
    setGetComments({
      data: [
        buildComment({ name: 'Grace', message: 'Great work', created_at: '2026-03-07T12:00:00Z' }),
      ],
    })

    renderWithProviders(<Comments />)

    expect(screen.getByRole('heading', { name: 'Grace' })).toBeInTheDocument()
    expect(screen.getByText('Great work')).toBeInTheDocument()
    expect(screen.getByText('07/03/2026')).toBeInTheDocument()
  })

  it('does not submit when the fields only contain whitespace', async () => {
    const user = userEvent.setup()
    const mutate = setPostComment()

    renderWithProviders(<Comments />)

    await user.type(screen.getByLabelText('Name'), '   ')
    await user.type(screen.getByLabelText('Message'), '   ')
    await user.click(screen.getByRole('button', { name: 'Post comment' }))

    expect(mutate).not.toHaveBeenCalled()
  })

  it('submits trimmed values, prepends the new comment and clears the form', async () => {
    const user = userEvent.setup()
    const created = buildComment({
      name: 'Linus',
      message: 'Hello there',
      created_at: '2026-05-09T09:00:00Z',
    })
    const mutate = vi.fn((_payload, options) => options?.onSuccess?.(created))
    setPostComment({ mutate })

    renderWithProviders(<Comments />)

    const nameInput = screen.getByLabelText('Name')
    const messageInput = screen.getByLabelText('Message')

    await user.type(nameInput, '  Linus  ')
    await user.type(messageInput, '  Hello there  ')
    await user.click(screen.getByRole('button', { name: 'Post comment' }))

    expect(mutate).toHaveBeenCalledWith(
      { name: 'Linus', message: 'Hello there' },
      expect.objectContaining({ onSuccess: expect.any(Function) }),
    )
    expect(screen.getByRole('heading', { name: 'Linus' })).toBeInTheDocument()
    expect(screen.getByText('Hello there')).toBeInTheDocument()
    expect(screen.getByText('09/05/2026')).toBeInTheDocument()
    expect(nameInput).toHaveValue('')
    expect(messageInput).toHaveValue('')
  })

  it('disables the submit button and relabels it while a post is pending', () => {
    setPostComment({ isPending: true })

    renderWithProviders(<Comments />)

    const button = screen.getByRole('button', { name: 'Posting...' })
    expect(button).toBeDisabled()
  })

  it('shows an error message when posting a comment fails', () => {
    setPostComment({ isError: true })

    renderWithProviders(<Comments />)

    expect(
      screen.getByText('Something went wrong posting your comment. Please try again.'),
    ).toBeInTheDocument()
  })
})
