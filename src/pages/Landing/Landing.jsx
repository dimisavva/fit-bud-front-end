import styles from './Landing.module.css'
import { useParams } from 'react-router-dom'

const Landing = ({user, profile}) => {
  return (
    <>
      <main className={styles.container}>
      <h1>Hello, {user ? user.name : 'friend'}</h1>
     
      <main className={styles.container}>
      </main>
      


      
  


        <section className={styles.splash}>

        </section>
        <section className={styles.about}>
          <header>
            <h2>Fitbudz</h2>
            <h1>ABOUT US</h1>
          </header>
          <article>
            <p>
              Have you ever struggled losing weight or just trying to be in shape? 
              My friends and I know that struggle all too well. We made this app to share our progress on a weight-loss journey.
              Those fad diets never worked for us or I. My name is Manny I'm gonna share a short story of my weight-loss journey.
              At the hieght of my weight of 272lbs. I was grossly over-weight, I suffered body dysmorphia and was overall depressed. Until a few of my friends got me out of bed. It took about 2 years to lose wieght. I had some major hurdles but I planned my Diet and Exercise around my needs. Not everyone is the same when it comes to diet, exercise, and weight loss. You have to build a lifestyle that's only for you. So in two years I went from 272lbs to 211lbs. You can say my doctor was estatic to see that. I learned what foods work and what exercises worked best for me. Overall its about you.
            </p>
          </article>
        </section>

        <section className={styles.testimonial}>
          <header>
            <h3>Meet the Creators</h3>
            <h1>Stories</h1>
          </header>
          <article>
            <header>
              <h4>Mike Robles</h4>
              <p>Software Engineer/Commander</p>
            </header>
            <p>
              I just wanted some help with weightloss. With the aid of my teammates, we innovated this Social Fitness App. We thought with other users/friends we can keep others and ourselves accountable. The journey is long, frustrating and demoralizing. I believe this app can help achieve our goals with friends. Teammates: (Dimi, Jake, and Manny)
            </p>
            <footer>

            </footer>
          </article>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© 2022 DJ MVMT INC. FitBudz RIGHTS RESERVED</p>
      </footer>
    </>
  )
}

export default Landing
