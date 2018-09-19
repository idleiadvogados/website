import React from 'react'
import { Container } from '../Layout/Container'
import { Element } from 'react-scroll'
import styles from './Section.module.scss'

const Section = ({ children, className, id, fullWidth }) => {
  return (
    <Container className={className}>
      <Element
        className={
          fullWidth ? `${styles.fullWidth} ${styles.element}` : styles.element
        }
        name={id}
      >
        {children}
      </Element>
    </Container>
  )
}

export default Section
