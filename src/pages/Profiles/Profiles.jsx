import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Link } from 'react-router-dom'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import styles from './Profiles.module.css'

import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'

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
      <h1>Hello. This is a list of all the profiles.</h1>
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