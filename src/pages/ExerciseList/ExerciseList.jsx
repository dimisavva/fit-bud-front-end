import styles from './ExerciseList.module.css'
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard'

const ExerciseList = (props) => {
  return (
    <main className={styles.container}>
      <h1>Exercise Lists:</h1>
      {props.exercises.map((exercise) => (
        <ExerciseCard key={exercise._id} exercise={exercise}/>
      ))}
    </main>
  )
}

export default ExerciseList