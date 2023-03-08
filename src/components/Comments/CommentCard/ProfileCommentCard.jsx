import { Link } from "react-router-dom"
import AuthorInfo from "../../AuthorInfo/AuthorInfo"

const ProfileCommentCard = ({ comment, profileId, user, handleDeleteComment }) => {
  return (
    <article>
      <header>
        <span>
          <AuthorInfo content={comment} />
          {comment.author._id === user.profile &&
            <>
              <Link to={`/profiles/${profileId}/comments/${comment._id}`} state={comment}>
                EDIT
              </Link>
              <button onClick={()=> handleDeleteComment(profileId, comment._id)}>
                DELETE
              </button>
            </>
          }
        </span>
      </header>
      <p>{comment.text}</p>
    </article>
  )
}

export default ProfileCommentCard