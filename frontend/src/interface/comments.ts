export type Comment = {
  name: string;
  message: string;
  created_at: string;
}

export type NewComment = Pick<Comment, 'name' | 'message'>