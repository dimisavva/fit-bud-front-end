import { Link } from "react-router-dom";
import styles from './ProfileCard.module.css'
import ProfileIcon from '../../assets/icons/profile.png'
import AuthorInfo from "../AuthorInfo/AuthorInfo"


const ProfileCard = ({ profile }) => {
  const photo = profile?.photo ? profile.photo : ProfileIcon
  return(
    <Link to={`/profiles/${profile._id}`}>
      <article className={styles.container}>
        <img src={photo} alt='poopshit' />
        <header>
            {/* <AuthorInfo content={profile}/> */}
          <span>
            <h1>{profile.name}</h1>
          </span>
        </header>
      </article>

    </Link>
  )
}

export default ProfileCard