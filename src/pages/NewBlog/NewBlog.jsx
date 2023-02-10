import { useState } from "react"
import styles from './NewBlog.module.css'

const NewBlog = (props) => {
  const [form, setForm] = useState({
    title: '',
    text: '',
    category: 'Exercise',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddBlog(form)
  }

  
  return (
    <main className={styles.container}>
      <h1>New Blog:</h1>
      <form onSubmit={handleSubmit}>
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
          <option value="Supplements">Supplements</option>
          <option value="Personal Journey">Personal Journey</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewBlog