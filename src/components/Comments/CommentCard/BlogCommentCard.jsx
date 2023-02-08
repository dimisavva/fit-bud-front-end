import AuthorInfo from "../../AuthorInfo/AuthorInfo"

const BlogCommentCard = ({ comment }) => {
  return (
    <article>
      <header>
        <AuthorInfo content={comment} />
      </header>
      <p>{comment.text}</p>
    </article>
  )
}

export default BlogCommentCard