import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './MealDetails.module.css'
import * as mealService from "../../services/mealService"
import * as profileService from "../../services/profileService"
import Loading from "../Loading/Loading"
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"
import NewComment from "../../components/NewComment/NewComment"
import MealComments from "../../components/Comments/MealComments"

const MealDetails = (props) => {
  const { id } = useParams()
  const [meal, setMeal] = useState(null)
  const [mealPlan, setMealPlan] = useState(null)

  const handleAddComment = async (commentData) => {
    const newComment = await mealService.createComment(id, commentData)
    setMeal({ ...meal, comments: [...meal.comments, newComment] })
  }

  const handleDeleteComment = async (mealId, commentId) => {
    await mealService.deleteComment(mealId, commentId)
    setMeal({ ...meal, comments: meal.comments.filter((c) => c._id !== commentId) })
  }

  const handleAddMealPlan = async (mealData, profileId) => {
    const newMeal = await profileService.addToMealPlan(id, mealData)
    setMealPlan({ ...mealPlan, mealPlans: [...mealPlan, newMeal]})
  }

  useEffect(() => {
    const fetchMeal = async () => {
      const data = await mealService.show(id)
      console.log(data)
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
                <button onClick={() =>props.handleDeleteMeal(id)}>Delete</button>
              </>
            }
            <button onClick={() => handleAddMealPlan(id)}>Add Meal Plan</button>
          </span>
        </header>
        <p>{meal.description}</p>
      </article>
      <section>
        <h1>Comments</h1>
          <NewComment handleAddComment={handleAddComment} />
          <MealComments 
          meal={meal} 
          user={props.user} 
          comments={meal.comments} 
          handleDeleteComment={handleDeleteComment} />
      </section>
    </main>
  )
}

export default MealDetails