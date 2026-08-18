import instance from '../api'

import type { Comment, NewComment } from '../../src/interface/comments.ts'

export const getComments = async (): Promise<Comment[]> => {
  try {
    const response = await instance.get('/api/comments')
    return response.data
  } catch (error) {
    console.error('Error fetching comments:', error)
    throw error
  }
}

export const postComment = async (comment: NewComment): Promise<Comment> => {
  try {
    const response = await instance.post('/api/comments', {comment: comment})
    return response.data
  } catch (error) {
    console.error('Error posting comment:', error)
    throw error
  }
}