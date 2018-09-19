import React from 'react'
import { Card } from '../../Card'
import Container from '../../Layout/Container/Container'
import styles from './About.module.scss'

const About = ({ title, text, overlayText, sectionTitle }) => {
  return (
    <div className={styles.aboutWrapper}>
      <Card
        className={styles.about}
        overlayText={overlayText}
        sectionTitle={sectionTitle}
        cardContentClassName={styles.cardContent}
      >
        <AboutInfo title={title} text={text} />
      </Card>
      <div className={styles.backgroundSquare} />
    </div>
  )
}

const AboutInfo = ({ title, text }) => {
  return (
    <div>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  )
}

export default About
