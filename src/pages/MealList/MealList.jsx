import styles from './MealList.module.css'
import MealCard from '../../components/MealCard/MealCard'
import { NavLink } from 'react-router-dom'
const MealList = (props) => {
  return (
    <main className={styles.container}>
      <h1>Meal Lists:</h1>
      <NavLink to="/meals/new">Create a New Meal!✨</NavLink>
      {props.meals.map((meal) => (
        <MealCard key={meal._id} meal={meal} />
      ))}
    </main>
  )
}

export default MealList