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
            <h3></h3>
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
            <h1>DJ MVMT</h1>
          </header>
          <article>
            <header>
              <h4></h4>
              <p></p>
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
