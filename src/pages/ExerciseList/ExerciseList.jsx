import styles from './ExerciseList.module.css'
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard'

const ExerciseList = (props) => {
  console.log('ExerciseList props:', props)
  return (
    <main className={styles.container}>
      {props.exercises.map((exercise) => (
        <ExerciseCard key={exercise._id} exercise={exercise}/>
      ))}
    </main>
  )
}

export default ExerciseList