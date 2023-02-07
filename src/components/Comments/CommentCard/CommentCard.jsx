import { Link } from "react-router-dom"
import AuthorInfo from "../../AuthorInfo/AuthorInfo"

const CommentCard = ({ comment }) => {
  return (
    <Link to={`/comments/${comment._id}`}>
      <article>
        <header>
          <AuthorInfo content={comment} />
        </header>
        <p>{comment.text}</p>
      </article>
    </Link>
  )
}

export default CommentCard