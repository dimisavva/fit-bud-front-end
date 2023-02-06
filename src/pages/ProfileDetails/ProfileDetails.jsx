import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './ProfileDetails.module.css'
import Loading from "../Loading/Loading";

import * as profileService from '../../services/profileService'

const ProfileDetails = (props) => {
  const { id } = useParams()
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await profileService.show(id)
      setProfile(data)
    }
    fetchProfile()
  }, [id])
  if (!profile) return <Loading />
  console.log(profile)

  return ( 
    <main className={styles.container}>
      <article>
        <header>
          {profile.name}

        </header>
      </article>
    <section>
        
      <h1>Details</h1>
    </section>
  </main>
  );
}
 
export default ProfileDetails;