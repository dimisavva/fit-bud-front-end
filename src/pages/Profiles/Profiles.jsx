import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
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
      <main className={styles.container}>
      <h1>Profile List</h1>
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