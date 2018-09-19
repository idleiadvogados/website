import React from 'react'
import styles from './Home.module.scss'
import { Container } from '../../Layout/Container'
import { Button } from '../../Button'
import { Link } from 'react-scroll'
import { Mobile, Default } from '../../Responsive'
import { scrollAnimationDuration, scrollOffset } from '../../constants'

const Home = ({ subtitle }) => {
  return (
    <div className={styles.home}>
      <Mobile>
        <div className={styles.homeOverlay} />
      </Mobile>
      <div className={styles.container}>
        <div>
          <Default>
            <div>
              <span className={`${styles.title} ${styles.title1}`}>IDLei</span>
            </div>
          </Default>
          <Mobile>
            <div className={styles.title}>
              <span>IDLei</span>
            </div>
          </Mobile>
        </div>
        <div className={styles.subtitle}>{subtitle}</div>
        <Link
          smooth={true}
          duration={scrollAnimationDuration}
          to="contacts"
          offset={scrollOffset}
          className={styles.button}
        >
          <Button
            buttonType="fullButton"
            text="Contacte-nos"
            active
            className={styles.innerButton}
          />
        </Link>
      </div>
    </div>
  )
}

export default Home
