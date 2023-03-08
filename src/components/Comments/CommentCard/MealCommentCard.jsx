import AuthorInfo from "../../AuthorInfo/AuthorInfo"
import { Link } from "react-router-dom"

const MealCommentCard = ({ comment, meal, user, handleDeleteComment }) => {
  return (
    <article>
      <header>
        <span>
          <AuthorInfo content={comment} />
          {comment.author._id === user.profile &&
            <>
              <Link to={`/meals/${meal._id}/comments/${comment._id}`} state={comment}>
                Edit
              </Link>
              <button onClick={() => handleDeleteComment(meal._id, comment._id)}>
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

export default MealCommentCard