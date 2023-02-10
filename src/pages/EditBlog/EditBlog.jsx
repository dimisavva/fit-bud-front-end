import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from './EditBlog.module.css'

const EditBlog = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateBlog(form)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Blog</h1>
        <label htmlFor="title-input">Title</label>
        <input
          required
          type="text"
          name="title"
          id="title-input"
          value={form.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <label htmlFor="text-input">Text</label>
        <textarea
          required
          type="text"
          name="text"
          id="text-input"
          value={form.text}
          placeholder="Text"
          onChange={handleChange}
        />
        <label htmlFor="category-input">Category</label>
        <select
          required
          name="category"
          id="category-input"
          value={form.category}
          onChange={handleChange}
        >
          <option value="Exercise">Exercise</option>
          <option value="Gym">Gym</option>
          <option value="Food">Food</option>
          <option value="Suppliments">Suppliments</option>
          <option value="Personal Journey">Personal Journey</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EditBlog