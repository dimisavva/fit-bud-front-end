import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import styles from './Profiles.module.css'


const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
    <main className={styles.container}>
      {profiles.length ? 
        <>
          {profiles.map(profile =>
              <ProfileCard key={profile._id} profile={profile}/>
              )}

        </>
      :
      <p>No profiles yet</p>
    }

    </main>
    </>
  )
}


export default Profiles