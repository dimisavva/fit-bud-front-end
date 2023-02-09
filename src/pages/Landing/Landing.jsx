import styles from './Landing.module.css'
import YoutubeEmbed from "../../YoutubeEmbed"

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      {/* <h2>{profile.photo}</h2> */}
      <div className="App">
      <h1>React Youtube Embedding Example</h1>
      <YoutubeEmbed embedId="rokGy0huYEA" />
    </div>
    </main>
  )
}

export default Landing
