import { Link } from "react-router-dom";
import styles from './ProfileCard.module.css'

const ProfileCard = ({ profile }) => {
  return(
    <Link to={`/profiles/${profile._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <>
              <h1>{profile.name}</h1>
              <h2><img src={profile.photo}/></h2>
            </>
          </span>
        </header>
      </article>

    </Link>
  )
}

export default ProfileCard