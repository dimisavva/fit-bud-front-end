import { Link } from "react-router-dom"
import AuthorInfo from "../../AuthorInfo/AuthorInfo"

const CommentCard = ({ comment, profileId, user }) => {
  return (
    // <Link to={`/comments/${comment._id}`}>
      <article>
        <header>
        <span>
          <AuthorInfo content={comment} />
          {comment.author._id === user.profile &&
            <>
              <Link to={`/profile/${profileId}/comments/${comment._id}`} state={comment}>
                EDIT
              </Link>
              <button>DELETE</button>
            </>
          }
        </span>
          {/* <AuthorInfo content={comment} /> */}
        </header>
        <p>{comment.text}</p>
      </article>
    // </Link>
  )
}

export default CommentCard