import styles from './ExerciseList.module.css'

const ExerciseList = (props) => {
  console.log('ExerciseList props:', props)
  return (
    <main className={styles.container}>
      {props.exercises.map((exercise) => (
        <p key={exercise._id}>
          {exercise.title}
        </p>
      ))}
    </main>
  )
}

export default ExerciseList