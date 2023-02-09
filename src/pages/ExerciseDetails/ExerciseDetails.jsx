import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styles from './ExerciseDetails.module.css'
import * as exerciseService from "../../services/exerciseService"
import Loading from "../Loading/Loading"
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"
import NewComment from "../../components/NewComment/NewComment"
import ExerciseComments from "../../components/Comments/ExerciseComments"

const ExerciseDetails = (props) => {
  const { id } = useParams()
  const [exercise, setExercise] = useState(null)

  const handleAddComment = async (commentData) => {
    const newComment = await exerciseService.createComment(id, commentData)
    setExercise({ ...exercise, comments: [...exercise.comments, newComment] })
  }

  const handleDeleteComment = async (exerciseId, commentId) => {
    await exerciseService.deleteComment(exerciseId, commentId)
    setExercise({ ...exercise, comments: exercise.comments.filter((c) => c._id !== commentId) })
  }

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
          <span>
            <AuthorInfo content={exercise} />

            {exercise.author._id === props.user.profile && 
              <>
                <Link to={`/exercises/${id}/edit`} state={exercise}>Edit</Link>
                <button onClick={() =>props.handleDeleteExercise(id)}>Delete</button>
              </>
            }
          </span>
        </header>
        <p>{exercise.text}</p>
      </article>
      <section>
        <h1>Comments</h1>
        <NewComment handleAddComment={handleAddComment} />
        <ExerciseComments
        exercise={exercise} 
        user={props.user} 
        comments={exercise.comments}
        handleDeleteComment={handleDeleteComment} 
        />
      </section>
    </main>
  )
}

export default ExerciseDetails