import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import type { Mock } from 'vitest'

import instance from '../api'
import { getComments, postComment } from './comentarios'
import type { Comment } from '../../src/interface/comments'

vi.mock('../api', () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
  },
}))

const mockedInstance = instance as unknown as { get: Mock; post: Mock }

const sampleComment: Comment = {
  name: 'Ada',
  message: 'Nice portfolio!',
  created_at: '2026-01-02T10:00:00Z',
}

describe('comentarios client', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('getComments', () => {
    it('requests the comments endpoint and returns response data', async () => {
      mockedInstance.get.mockResolvedValueOnce({ data: [sampleComment] })

      const result = await getComments()

      expect(mockedInstance.get).toHaveBeenCalledWith('/api/comments')
      expect(result).toEqual([sampleComment])
    })

    it('logs and rethrows when the request fails', async () => {
      const error = new Error('network down')
      mockedInstance.get.mockRejectedValueOnce(error)

      await expect(getComments()).rejects.toThrow('network down')
      expect(console.error).toHaveBeenCalledWith('Error fetching comments:', error)
    })
  })

  describe('postComment', () => {
    it('wraps the payload under a comment key and returns the created comment', async () => {
      mockedInstance.post.mockResolvedValueOnce({ data: sampleComment })

      const result = await postComment({ name: 'Ada', message: 'Nice portfolio!' })

      expect(mockedInstance.post).toHaveBeenCalledWith('/api/comments', {
        comment: { name: 'Ada', message: 'Nice portfolio!' },
      })
      expect(result).toEqual(sampleComment)
    })

    it('logs and rethrows when the request fails', async () => {
      const error = new Error('422')
      mockedInstance.post.mockRejectedValueOnce(error)

      await expect(
        postComment({ name: 'Ada', message: 'Nice portfolio!' }),
      ).rejects.toThrow('422')
      expect(console.error).toHaveBeenCalledWith('Error posting comment:', error)
    })
  })
})
