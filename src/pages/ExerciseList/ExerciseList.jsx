import styles from './ExerciseList.module.css'
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard'
import { NavLink } from 'react-router-dom'
const ExerciseList = (props) => {
  return (
    <main className={styles.container}>
      <h1>Exercise Lists:</h1>
      <NavLink className={styles.Navlink} to="/exercises/new">Create a New Exercise!✨</NavLink>
      {props.exercises.map((exercise) => (
        <ExerciseCard key={exercise._id} exercise={exercise}/>
      ))}
    </main>
  )
}

export default ExerciseList