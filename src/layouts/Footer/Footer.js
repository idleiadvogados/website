import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      © IDLei – Advogados R.L. {new Date().getFullYear()}
    </div>
  )
}

export default Footer
