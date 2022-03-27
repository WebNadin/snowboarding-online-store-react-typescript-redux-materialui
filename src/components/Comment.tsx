import React from 'react'

export interface IComment {
  body: string,
  id: number
}

const Comment = ({ comment }: {comment: IComment}) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="h5 card-title">{comment.body}</div>
      </div>
    </div>
  )
}

export default Comment;