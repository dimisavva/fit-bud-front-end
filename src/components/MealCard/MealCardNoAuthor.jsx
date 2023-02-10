import { Link } from "react-router-dom"
import styles from "./MealCard.module.css"
import Icon from "../Icon/Icon"

const MealCardNoAuthor = ({ meal }) => {
  return (
    <Link to={`/meals/${meal._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{meal.name}</h1>
            <Icon category={meal.category} />
          </span>
        </header>
        <p>{meal.description}</p>
      </article>
    </Link>
  )
}

export default MealCardNoAuthor