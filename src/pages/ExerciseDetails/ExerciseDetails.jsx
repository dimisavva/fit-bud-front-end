import {useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './ExerciseDetails.module.css'
import Loading from "../Loading/Loading"
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"
import * as exerciseService from '../../services/exerciseService'


const ExerciseDetails = (props) => {
  const { id } = useParams()
  const [exercise, setExercise] = useState(null)

  useEffect(() => {
    const fetchExercise = async () => {
      const data = await exerciseService.show(id)
      setExercise(data)
    }
    fetchExercise()
  }, [id])

  if (!exercise) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h1>{exercise.name}</h1>
          <span>
            <AuthorInfo content={exercise} />
          </span>
        </header>
        <p>{exercise.description}</p>
      </article>
      <section>
        <h1>Comments</h1>
      </section>
    </main>
  )
}

export default ExerciseDetails