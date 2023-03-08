import { useState } from "react"
import { useLocation, useParams, useNavigate } from "react-router-dom"
import styles from './EditComment.module.css'

// Services
import * as exerciseService from '../../services/exerciseService'

const EditExerciseComment = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { exerciseId, commentId } = useParams()
  const [form, setForm] = useState(state)

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await exerciseService.updateComment(exerciseId, commentId, form)
    navigate(`/exercises/${exerciseId}`)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Edit Comment</h1>
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
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default EditExerciseComment