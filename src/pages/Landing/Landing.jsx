import styles from './Landing.module.css'
import { useParams } from 'react-router-dom'

const Landing = ({user, profile}) => {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.splash}>

        </section>
        <section className={styles.about}>
          <header>
            <h3>HOO WE ARE</h3>
            <h1>ABOUT US</h1>
          </header>
          <article>
            <p>
              There is an ongoing trend of diets and exercises that promises fast wieght loss. Those fad diets and exercises are made by 
            </p>
          </article>
        </section>
        <section className={styles.testimonial}>
          <header>
            <h3>WHO GIVES A HOOT?</h3>
            <h1>TESTIMONIALS</h1>
          </header>
          <article>
            <header>
              <h4>Ben Manley</h4>
              <p>Software Engineer</p>
            </header>
            <p>
              I found Hoot through a friend of mine, and I'm so glad I did. As a night owl, I have a hard time finding blogging apps that fit my lifestyle. The interface is so easy to use and makes it really convenient for me to write my blogs at night.
            </p>
            <footer>

            </footer>
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
