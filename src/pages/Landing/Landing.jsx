import styles from './Landing.module.css'


const Landing = ({}) => {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.splash}>

        </section>
        <section className={styles.about}>
          <header>
            <h3></h3>
            <h1>Mission Statement</h1>
          </header>
          <article>
            <p>
            This app was built by four strangers who became closer in a week simply with a common goal in mind. FitBud is a culmination of our culture as a team, to connect people in achieving wellness of any level, together. 
            </p>
          </article>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© 2023 DJ MVMT - FitBuds Group. ALL RIGHTS RESERVED.</p>
      </footer>
    </>
  )
}



export default Landing
