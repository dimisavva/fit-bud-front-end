import { Link } from "react-router-dom"
import AuthorInfo from "../../AuthorInfo/AuthorInfo"

const BlogCommentCard = ({ comment, blog, user, handleDeleteComment }) => {
  return (
    <article>
      <header>
      <span>
          <AuthorInfo content={comment} />
          {comment.author._id === user.profile &&
            <>
              <Link to={`/blogs/${blog._id}/comments/${comment._id}`} state={comment}>
                EDIT
              </Link>
              <button onClick={()=> handleDeleteComment(blog._id, comment._id)}>
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

export default BlogCommentCard