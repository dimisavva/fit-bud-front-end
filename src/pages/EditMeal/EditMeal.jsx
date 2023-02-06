import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from './EditMeal.module.css'

const EditMeal = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Meal</h1>
        <label htmlFor="name-input">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={form.name}
          placeholder="Name"
          onChange={handleChange}
          />
          <label htmlFor="description-input">Description</label>
        <textarea
          required
          type="text"
          name="description"
          id="description-input"
          value={form.description}
          placeholder="Description"
          onChange={handleChange}
          />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EditMeal