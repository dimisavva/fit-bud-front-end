import BlogCard from "../../components/BlogCard/BlogCard"
import styles from './BlogList.module.css'
import { NavLink } from "react-router-dom"
const BlogList = (props) => {
  return (
    <main className={styles.container}>
      <h1>Blogs:</h1>
      <NavLink to="/blogs/new">Create a New Blog!✨</NavLink>
      {props.blogs.map((blog) => (
        <BlogCard blog={blog} key={blog._id} />
      ))}
    </main>
  ) 
}

export default BlogList