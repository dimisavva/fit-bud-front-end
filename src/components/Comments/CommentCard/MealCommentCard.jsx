import AuthorInfo from "../../AuthorInfo/AuthorInfo"
import { Link } from "react-router-dom"

const MealCommentCard = ({ comment, mealId, user, handleDeleteComment }) => {
  return (
    <article>
      <header>
        <span>
          <AuthorInfo content={comment} />
          {comment.author._id === user.profile && 
            <>
              <Link to={`/meals/${mealId}/comments/${comment._id}`} state={comment}>
                Edit
              </Link>
              <button onClick={() => handleDeleteComment(mealId, comment._id)}>
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