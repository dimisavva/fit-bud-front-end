import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from './ProfileDetails.module.css'
import Loading from "../Loading/Loading"
import * as profileService from '../../services/profileService'
import ProfileExerciseCard from "../../components/ExerciseCard/ProfileExerciseCard"
import NewComment from "../../components/NewComment/NewComment"
import Comments from "../../components/Comments/ProfileComments"
import ProfileBlogCard from "../../components/BlogCard/ProfileBlogCard"
import ProfileMealCard from "../../components/MealCard/ProfileMealCard"

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
          <img src={profile.photo} alt='profile'/>
          <h2>{profile.name}'s Profile</h2>
      </article>
      <section>
        <h1>Meals:</h1>
        {profile.meals.length ?
        <>
          {profile.meals.map((meal) => (
            <ProfileMealCard key={meal._id} meal={meal} />
          ))}
        </>
        :
        <p>No meals yet.</p>
        }
        <h1>Exercises:</h1>
        {profile.exercises.length ?
        <>
          {profile.exercises.map((exercise) => (
            <ProfileExerciseCard key={exercise._id} exercise={exercise} />
          ))}
        </>
        :
        <p>No Exercise yet</p>
        }
        <h1>Blogs:</h1>
        {profile.blogs.length ?
        <>
          {profile.blogs.map((blog) => (
            <ProfileBlogCard key={blog._id} blog={blog}/>
          ))}
        </>
        :
        <p>No Blogs yet</p>
        }
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