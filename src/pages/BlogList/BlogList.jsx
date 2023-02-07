import BlogCard from "../../components/BlogCard/BlogCard"
import styles from './BlogList.module.css'

const BlogList = (props) => {
  return (
    <main className={styles.container}>
      {props.blogs.map((blog) => (
        <BlogCard blog={blog} key={blog._id} />
      ))}
    </main>
  ) 
}

export default BlogList