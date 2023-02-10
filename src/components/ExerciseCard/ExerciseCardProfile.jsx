import { Link } from "react-router-dom"
import styles from './ExerciseCard.module.css'

const ExerciseCardProfile = ({ exercise }) => {
  return (
    <Link to={`/exercises/${exercise._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{exercise.title}</h1>
          </span>
        </header>
        <p>{exercise.text}</p>
      </article>
    </Link>
  )
}

export default ExerciseCardProfile