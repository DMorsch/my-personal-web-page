import { useState } from 'react'
import type { FormEvent } from 'react'
import './Comments.css'

interface Comment {
  name: string
  message: string
}

const Comments = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [comments, setComments] = useState<Comment[]>([])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!name.trim() || !message.trim()) return

    setComments([{ name: name.trim(), message: message.trim() }, ...comments])
    setName('')
    setMessage('')
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

        <button type="submit">Post comment</button>
      </form>

      <ul className="comment-list">
        {comments.length === 0 && (
          <p className="empty-state">No comments yet. Be the first to leave one!</p>
        )}
        {comments.map((comment, index) => (
          <li key={index} className="comment">
            <h2>{comment.name}</h2>
            <p>{comment.message}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Comments
