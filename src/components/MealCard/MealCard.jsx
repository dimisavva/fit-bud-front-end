import { Link } from "react-router-dom"
import styles from "./MealCard.module.css"
import AuthorInfo from "../AuthorInfo/AuthorInfo"
import Icon from "../Icon/Icon"

const MealCard = ({ meal }) => {
  return (
    <Link to={`/meals/${meal._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{meal.name}</h1>
            <Icon category={meal.category} />
          </span>
          <AuthorInfo content={meal} />
        </header>
        <p>{meal.description}</p>
      </article>
    </Link>
  )
}

export default MealCard