import { useState } from "react"
import styles from './NewComment.module.css'

const NewComment = (props) => {
  const [form, setForm] = useState({ text: '' })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddComment(form)
    setForm({ text: '' })
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={form.text}
        placeholder="Add a Comment"
        onChange={handleChange}
      />
      <button type="submit">Post Comment</button>
    </form>
  )
}

export default NewComment





