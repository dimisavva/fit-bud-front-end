import { Link } from "react-router-dom";
import styles from './ProfileCard.module.css'

import AuthorInfo from "../AuthorInfo/AuthorInfo";

const ProfileCard = ({ profile }) => {
  return(
    <Link to={`/profiles/${profile._id}`}>
      <article className={styles.container}>
        <header>
            <AuthorInfo content={profile}/>
          <span>
          </span>
            <h1>{profile.name}</h1>
        </header>
      </article>

    </Link>
  )
}

export default ProfileCard