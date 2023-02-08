import AuthorInfo from "../../AuthorInfo/AuthorInfo"

const ExerciseCommentCard = ({ comment }) => {
  return (
    <article>
      <header>
        <AuthorInfo content={comment} />
      </header>
      <p>{comment.text}</p>
    </article>
  )
}

export default ExerciseCommentCard