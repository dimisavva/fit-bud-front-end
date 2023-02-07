import { useState } from "react"
import { useLocation, useParams, useNavigate } from "react-router-dom"
import styles from './EditComment.module.css'

// Services

import * as profileService from '../../services/profileService'

import * as mealService from '../../services/mealService'


const EditComment = () => {
  const navigate = useNavigate()
  const { state } = useLocation()

  const { profileId, commentId } = useParams()

  const { mealId, commentId } = useParams()

  const [form, setForm] = useState(state)

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await profileService.updateComment(profileId, commentId, form)
    navigate(`/profile/${profileId}`)

    await mealService.updateComment(mealId, commentId, form)
    navigate(`/meals/${mealId}`)

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

export default EditComment