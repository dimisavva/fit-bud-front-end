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
              There is an ongoing trend of diets and exercises that promises fast wieght loss. Those fad diets and exercises are made by celebrities and bodybuilders. It's simple these people whom push these ideas have different circumstances not to mention the time and resources to work for the so called "Perfect Body". Our group DJ MVMT, know how hard it is to be in shape. So we made this app to cater to the individuals needs rather than having a one size fits all approach.
            </p>
          </article>
        </section>
        <section className={styles.testimonial}>
          <header>
            <h3>Fitbud</h3>
            <h1>TESTIMONIALS</h1>
          </header>
          <article>
            <header>
              <h4>The Team</h4>
              <p>DJ MVMT</p>
            </header>
            <p>
            DJ MVMT was founded and formed in Feb 2023. The excellent minds of Dimi Savva, Michael Robles, Jake Todoroki, and Manny Maldonado. We worked very hard to make this app for our friends and the improvments of ourselves
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
