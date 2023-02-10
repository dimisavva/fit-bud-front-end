import { useState } from "react"
import styles from './NewExercise.module.css'

const NewExercise = (props) => {
  const [form, setForm] = useState({
    title: '',
    text: '',
    category: 'Cardio',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddExercise(form)
  }

  return (
    <main className={styles.container}>
      <h1>New Exercise: </h1>
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
          <option value="Cardio">Cardio</option>
          <option value="Strength">Strength</option>
          <option value="Flexibility">Flexibility</option>
          <option value="Balance">Balances</option>
          <option value="Coordination">Coordination</option>
        
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewExercise