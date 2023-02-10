import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import FitBud_home_button from '../../assets/FitBud_home_button.png'

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/login">LOG IN</NavLink></li>
      <li><NavLink to="/signup">SIGN UP</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><NavLink to="/profiles">🧑</NavLink></li>
      <li><NavLink to="/meals">🥑</NavLink></li>
      <li><NavLink to="/meals/new">🥑✨</NavLink></li>
      <li><NavLink to="/blogs">#️⃣</NavLink></li>
      <li><NavLink to="/blogs/new">#️⃣✨</NavLink></li>
      <li><NavLink to="/exercises">🏋️</NavLink></li>
      <li><NavLink to="/exercises/new">🚴✨</NavLink></li>
      <li><NavLink to="logout" onClick={handleLogout}>LOG OUT🛌🏽</NavLink></li>
    </ul>
  )
  return (
    <nav className={styles.container}>
      <NavLink className={styles.navLink} to={'/'}><img src={FitBud_home_button} alt="FitBud Logo" /></NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
