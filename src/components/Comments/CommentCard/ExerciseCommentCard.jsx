import AuthorInfo from "../../AuthorInfo/AuthorInfo"
import { Link } from "react-router-dom"

const ExerciseCommentCard = ({ comment, exerciseId, user, handleDeleteComment }) => {
  return (
    <article>
      <header>
        <span>
          <AuthorInfo content={comment} />
            {comment.author._id === user.profile &&
              <>
                <Link to={`/exercises/${exerciseId}/comments/${comment._id}`} 
                state={comment}>
                  Edit
                </Link>
              <button onClick={()=> handleDeleteComment(exerciseId, comment._id)}>
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

export default ExerciseCommentCard