import { Link } from "react-router-dom"
import styles from './ExerciseCard.module.css'
import AuthorInfo from "../AuthorInfo/AuthorInfo"
import Icon from "../Icon/Icon"



const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercises/${exercise._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{exercise.title}</h1>
            <Icon category={exercise.category} />
          </span>
          <AuthorInfo content={exercise} />
        </header>
        <p>{exercise.text}</p>
      </article>
    </Link>
  )
}

export default ExerciseCard