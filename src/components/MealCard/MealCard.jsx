import { Link } from "react-router-dom"
import styles from "./MealCard.module.css"

import AuthorInfo from "../AuthorInfo/AuthorInfo"

const MealCard = ({ meal }) => {
  return (
    <Link to={`/meals/${meal._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <>
            <h1>{meal.name}</h1>
            </>
          </span>
          <AuthorInfo content={meal} />
        </header>
        <p>{meal.description}</p>
      </article>
    </Link>
  )
}

export default MealCard