import { Link } from "react-router-dom"
import styles from './BlogCard.module.css'
import Icon from "../Icon/Icon"

const BlogCardProfile = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{blog.title}</h1>
            <Icon category={blog.category} />
          </span>
        </header>
        <p>{blog.text}</p>
      </article>
    </Link>
  )
}

export default BlogCardProfile