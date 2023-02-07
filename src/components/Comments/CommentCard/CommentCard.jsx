import { Link } from "react-router-dom"

import AuthorInfo from "../../AuthorInfo/AuthorInfo"

const CommentCard = ({ comment }) => {
  return (
    <article>
      <header>
        <AuthorInfo content={comment} />
      </header>
      <p>{comment.text}</p>
    </article>
  )
}

export default CommentCard