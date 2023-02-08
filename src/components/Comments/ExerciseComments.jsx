import ExerciseCommentCard from "./CommentCard/ExerciseCommentCard"

const ExerciseComments = (props) => {
  if (!props.comments) return <h4>No Comments</h4>

  return (
    <>
      {props.comments.map((comment) => (
        <ExerciseCommentCard
          key={comment._id}
          comment={comment}
          user={props.user}
          exerciseId={props.exerciseId}
          handleDeleteComment={props.handleDeleteComment}
        />
      ))}
    </>
  )
}

export default ExerciseComments