import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './ExerciseDetails.module.css'
import * as exerciseService from "../../services/exerciseService"
import Loading from "../Loading/Loading"
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

const ExerciseDetails = (props) => {
  const { id } = useParams()
  const [exercise, setExercise] = useState(null)

  useEffect(() => {
    const fetchMeal = async () => {
      const data = await exerciseService.show(id)
      setExercise(data)
    }
    fetchMeal()
  }, [id])

  if (!exercise) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h1>{exercise.title}</h1>
          {/* <span>
            <AuthorInfo content={exercise} />

            {exercise.author._id === props.user.profile && 
              <>
                <Link to={`/exercises/${id}/edit`} state={exercise}>Edit</Link>
                <button onClick={() =>props.handleDeleteExcercise(id)}>Delete</button>
              </>
            }
          </span> */}
        </header>
        <p>{exercise.text}</p>
      </article>
      <section>
        <h1>Comments</h1>
      </section>
    </main>
  )
}

export default ExerciseDetails