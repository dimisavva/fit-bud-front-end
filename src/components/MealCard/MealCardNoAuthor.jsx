import { Link } from "react-router-dom"
import styles from "./MealCard.module.css"

const MealCardNoAuthor = ({ meal }) => {
  return (
    <Link to={`/meals/${meal._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{meal.name}</h1>
          </span>
        </header>
        <p>{meal.description}</p>
      </article>
    </Link>
  )
}

export default MealCardNoAuthor