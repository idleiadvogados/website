import React from 'react'
import { Link } from 'react-scroll'
import styles from './Header.module.scss'
import { scrollAnimationDuration, scrollOffset } from '../constants'

const Menu = ({ toggleMenu = () => {} }) => {
  return (
    <div>
      <ul className={styles.menuList}>
        <li>
          <Link
            smooth={true}
            duration={scrollAnimationDuration}
            spy={true}
            className={styles.anchor}
            activeClass={styles.activeListItem}
            to="about"
            offset={scrollOffset}
            onClick={toggleMenu}
          >
            Sociedade
          </Link>
        </li>
        <li>
          <Link
            smooth={true}
            duration={scrollAnimationDuration}
            spy={true}
            className={styles.anchor}
            activeClass={styles.activeListItem}
            to="team"
            offset={scrollOffset}
            onClick={toggleMenu}
          >
            Equipa
          </Link>
        </li>
        <li>
          <Link
            smooth={true}
            duration={scrollAnimationDuration}
            spy={true}
            className={styles.anchor}
            activeClass={styles.activeListItem}
            to="careers"
            offset={scrollOffset}
            onClick={toggleMenu}
          >
            Candidaturas
          </Link>
        </li>
        <li>
          <Link
            smooth={true}
            duration={scrollAnimationDuration}
            spy={true}
            className={styles.anchor}
            activeClass={styles.activeListItem}
            to="contacts"
            onClick={toggleMenu}
          >
            Contactos
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
