import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import './Comments.css'

import { useGetComments, usePostComment } from '../../api/hooks/comentarios.ts'
import type { Comment } from '../interface/comments.ts'

const formatDate = (isoDate: string) => {
  const [year, month, day] = isoDate.slice(0, 10).split('-')
  return `${day}/${month}/${year}`
}

const Comments = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [comments, setComments] = useState<Comment[]>([])
  const { data: fetchedComments, isLoading, isError } = useGetComments()
  const { mutate: postComment, isPending: isPosting, isError: isPostError } = usePostComment()
  const seeded = useRef(false)

  useEffect(() => {
    if (fetchedComments && !seeded.current) {
      seeded.current = true
      setComments(fetchedComments)
    }
  }, [fetchedComments])

  if (isLoading) {
    return <p>Loading comments...</p>
  }

  if (isError) {
    return <p>Something went wrong loading comments. Please try again later.</p>
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedName = name.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName || !trimmedMessage) return

    postComment(
      { name: trimmedName, message: trimmedMessage },
      {
        onSuccess: (createdComment) => {
          setComments([createdComment, ...comments])
          setName('')
          setMessage('')
        },
      },
    )
  }

  return (
    <section id="comments">
      <h1>Leave a comment</h1>
      <p>Got something to say? Drop me a message below!</p>

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Your message"
            rows={4}
            required
          />
        </div>

        {isPostError && <p className="error-state">Something went wrong posting your comment. Please try again.</p>}

        <button type="submit" disabled={isPosting}>
          {isPosting ? 'Posting...' : 'Post comment'}
        </button>
      </form>

      <ul className="comment-list">
        {comments.length === 0 && (
          <p className="empty-state">No comments yet. Be the first to leave one!</p>
        )}
        {comments.map((comment, index) => (
          <li key={index} className="comment">
            <div className="comment-header">
              <h2>{comment.name}</h2>
              <time className="comment-date" dateTime={comment.created_at}>
                {formatDate(comment.created_at)}
              </time>
            </div>
            <p>{comment.message}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Comments
