import styles from './MealList.module.css'

const MealList = (props) => {
  return (
    <main className={styles.container}>
      {props.meals.map((meal) => (
        <p key={meal._id}>
          {meal.name}
        </p>
      ))}
    </main>
  )
}

export default MealList