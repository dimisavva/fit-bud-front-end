import MealCommentCard from "./CommentCard/MealCommentCard"

const MealComments = (props) => {
  if (!props.comments) return <h4>No Comments</h4>

  return (
    <>
      {props.comments.map((comment) => (
        <MealCommentCard
          key={comment._id}
          comment={comment}
          user={props.user}
        />
      ))}
    </>
  )
}

export default MealComments