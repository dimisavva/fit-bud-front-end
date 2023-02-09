import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
// import Logo from '../../assets/branding/logo.svg'

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/login">LOG IN</NavLink></li>
      <li><NavLink to="/signup">SIGN UP</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><NavLink to="/profiles">Profiles</NavLink></li>
      <li><NavLink to="/meals">Meals</NavLink></li> 
      <li><NavLink to="/meals/new">New Meal</NavLink></li>
      <li><NavLink to="/blogs">Blogs</NavLink></li>
      <li><NavLink to="/blogs/new">New Blog</NavLink></li>
      <li><NavLink to="/exercises">Exercises</NavLink></li>
      <li><NavLink to="/exercises/new">New Exercise</NavLink></li> 
      <li><NavLink to="logout" onClick={handleLogout}>LOG OUT</NavLink></li>
    </ul>
  )
  return (
    <nav className={styles.container}>
      <NavLink to={'/'}>HOME</NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
