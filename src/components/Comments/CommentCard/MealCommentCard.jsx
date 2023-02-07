import AuthorInfo from "../../AuthorInfo/AuthorInfo"

const MealCommentCard = ({ comment }) => {
  return (
    <article>
      <header>
        <AuthorInfo content={comment} />
      </header>
      <p>{comment.text}</p>
    </article>
  )
}

export default MealCommentCard