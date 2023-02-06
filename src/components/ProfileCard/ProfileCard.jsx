import { Link } from "react-router-dom";
import styles from './ProfileCard.module.css'

import Profiles from "../../pages/Profiles/Profiles";

const ProfileCard = ({ profile }) => {
  return(
    <Link to={`/profiles/${profile._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{profile.name}</h1>
          </span>
        </header>
      </article>

    </Link>
  )
}

export default ProfileCard