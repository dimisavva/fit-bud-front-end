import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './ProfileDetails.module.css'
import Loading from "../Loading/Loading"

import * as profileService from '../../services/profileService'
import MealCard from "../../components/MealCard/MealCard"
import ExerciseCard from "../../components/ExerciseCard/ExerciseCard"
import NewComment from "../../components/NewComment/NewComment"
import Comments from "../../components/Comments/ProfileComments"
import BlogCard from "../../components/BlogCard/BlogCard"
import MealPlanCard from "../../components/MealPlanCard/MealPlanCard"



const ProfileDetails = (props) => {
  const { id } = useParams()
  const [profile, setProfile] = useState(null)
  
  const handleAddComment = async (commentData) => {
    const newComment = await profileService.createComment(id, commentData)
    setProfile({ ...profile, comments: [...profile.comments, newComment] })
  }

  const handleDeleteComment = async (profileId, commentId) => {
    await profileService.deleteComment(profileId, commentId)
    setProfile({ ...profile, comments: profile.comments.filter((c) => c._id !== commentId) })
  }
  useEffect(() => {
    const fetchProfile = async () => {
      const data = await profileService.show(id)
      setProfile(data)
      console.log(data)
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
      <h1>Blogs</h1>
          {profile.blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      <h1>Comments:</h1>
        <NewComment handleAddComment={handleAddComment}/>
        <Comments 
          profileId={id} 
          user={props.user} 
          comments={profile.comments} 
          handleDeleteComment={handleDeleteComment}
        />
    </section>
  </main>
  )
}

export default ProfileDetails;