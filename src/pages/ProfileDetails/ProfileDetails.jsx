import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './ProfileDetails.module.css'
import Loading from "../Loading/Loading"

import * as profileService from '../../services/profileService'
import MealCard from "../../components/MealCard/MealCard"
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard"
import NewComment from "../../components/NewComment/NewComment"
import Comments from "../../components/Comments/Comments"


const ProfileDetails = (props) => {
  const { id } = useParams()
  const [profile, setProfile] = useState(null)
  
  const handleAddComment = async (commentData) => {
    const newComment = await profileService.createComment(id, commentData)
    setProfile({ ...profile, comments: [...profile.comments, newComment] })
  }

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await profileService.show(id)
      setProfile(data)
    }
    fetchProfile()
  }, [id])

  if (!profile) return <Loading />


  return ( 
    <main className={styles.container}>
      <article>
        <header>
          {profile.name}
          <img src={profile.photo}/>
          
        </header>
      </article>
    <section>
      <h1>Meals</h1>
        {profile.meals.map((meal) => (
          <MealCard key={meal._id} meal={meal} />
        ))}
      <h1>Exercises</h1>
        {profile.exercises.map((exercise) => (
          <ExerciseCard key={exercise._id} exercise={exercise} />
        ))}
      <h1>Comments:</h1>
        <NewComment handleAddComment={handleAddComment}/>
        <Comments comments={profile.comments} user={props.profile} profileId={id} />
    </section>
  </main>
  );
}

export default ProfileDetails;