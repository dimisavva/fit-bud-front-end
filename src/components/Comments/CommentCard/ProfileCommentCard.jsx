import { Link } from "react-router-dom"
import AuthorInfo from "../../AuthorInfo/AuthorInfo"

const ProfileCommentCard = ({ comment, profileId, user }) => {
  return (
    <article>
      <header>
        <span>
          <AuthorInfo content={comment} />
          {comment.author._id === user.profileId &&
            <>
              <Link to={`/profiles/${profileId}/comments/${comment._id}`} state={comment}>
                EDIT
              </Link>
              <button>DELETE</button>
            </>
          }
        </span>
      </header>
      <p>{comment.text}</p>
    </article>
  )
}

export default ProfileCommentCard