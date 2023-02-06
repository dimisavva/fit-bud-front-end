import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './MealDetails.module.css'
import * as mealService from "../../services/mealService"
import Loading from "../Loading/Loading"
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

const MealDetails = (props) => {
  const { id } = useParams()
  const [meal, setMeal] = useState(null)

  useEffect(() => {
    const fetchMeal = async () => {
      const data = await mealService.show(id)
      setMeal(data)
    }
    fetchMeal()
  }, [id])

  if (!meal) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h1>{meal.name}</h1>
          <span>
            <AuthorInfo content={meal} />

            {meal.author._id === props.user.profile && 
              <>
                <Link to={`/meals/${id}/edit`} state={meal}>Edit</Link>
                <button>Delete</button>
              </>}
          </span>
        </header>
        <p>{meal.description}</p>
      </article>
      <section>
        <h1>Comments</h1>
      </section>
    </main>
  )
}

export default MealDetails