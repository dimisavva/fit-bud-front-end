import styles from './MealList.module.css'
import MealCard from '../../components/MealCard/MealCard'

const MealList = (props) => {
  return (
    <main className={styles.container}>
      <h1>Meal Lists:</h1>
      {props.meals.map((meal) => (
        <MealCard key={meal._id} meal={meal} />
      ))}
    </main>
  )
}

export default MealList