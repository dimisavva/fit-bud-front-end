import { useState } from "react"
import styles from './NewMeal.module.css'

const NewMeal = (props) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    category: 'Snack',
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddMeal(form)
  }

  return (
    <main className={styles.container}>
      <h1>New meal:</h1>
      <form onSubmit={handleSubmit}>
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
        <label htmlFor="description-input">Descrition</label>
				<textarea
          required
          type="text"
          name="description"
          id="description-input"
          value={form.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <label htmlFor="category-input">Food Category</label>
        <select
          required
          name="category"
          id="category-input"
          value={form.category}
          onChange={handleChange}
        >
          <option value="Snack">Snack</option>
          <option value="Protein">Protein</option>
          <option value="Fruit">Fruit</option>
          <option value="Organic">Organic</option>
          <option value="Cheat Meal">Cheat Meal</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewMeal