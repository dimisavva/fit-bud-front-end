import { Link } from "react-router-dom"
import styles from "./MealPlanCard.module.css"

import AuthorInfo from "../AuthorInfo/AuthorInfo"

const MealPlanCard = ({ mealPlan }) => {
  return (
    <Link to={`/meals/${mealPlan._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{mealPlan.name}</h1>
          </span>
          <AuthorInfo content={mealPlan} />
        </header>
        <p>{mealPlan.description}</p>
      </article>
    </Link>
  )
}

export default MealPlanCard