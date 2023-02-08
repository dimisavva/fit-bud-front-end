import BlogCommentCard from "./CommentCard/BlogCommentCard"

const BlogComments = (props) => {
  if (!props.comments) return <h4>No Comments</h4>

  return (
    <>
      {props.comments.map((comment) => (
        <BlogCommentCard
          key={comment._id}
          comment={comment}
          user={props.user}
          blogId={props.blogId}
        />
      ))}
    </>
  )
}

export default BlogComments