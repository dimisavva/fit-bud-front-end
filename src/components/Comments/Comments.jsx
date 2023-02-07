import ProfileCommentCard from "./CommentCard/ProfileCommentCard"

const Comments = (props) => {
  if (!props.comments) return <h4>No Comments</h4>

  return (
    <>
      {props.comments.map((comment) => (
        <ProfileCommentCard
          key={comment._id}
          comment={comment}
          user={props.user}
          profileId={props.profileId}
        />
      ))}
    </>
  )
}

export default Comments