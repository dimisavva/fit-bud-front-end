import styles from './Landing.module.css'
import { useParams } from 'react-router-dom'
import Spotify from 'react-spotify-embed'

const Landing = ({user, profile}) => {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.splash}>

        </section>
        <section className={styles.about}>
          <header>
            <h1>ABOUT US</h1>
          </header>
          <article>
            <p>
              There is an ongoing trend of diets and exercises that promises fast wieght loss. Those fad diets and exercises are made by 
            </p>
          </article>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© 2023 DJ MVMT. FitBudz RIGHTS RESERVED</p>
      </footer>
    </>
  )
}



export default Landing
