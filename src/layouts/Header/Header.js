import React, { Component } from 'react'
import styles from './Header.module.scss'
import { Icon } from '../Icon'
import { Link } from 'react-scroll'
import Menu from './Menu'
import { Mobile, Default } from '../Responsive'
import { scrollAnimationDuration, scrollOffset } from '../constants'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
    }
  }
  _toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen })
  }
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <Link
              smooth={true}
              duration={scrollAnimationDuration}
              to="home"
              offset={scrollOffset}
            >
              <Icon type="logo" />
            </Link>
          </div>
          <Mobile>
            {this.state.isMenuOpen ? (
              <div className={styles.mobileMenu}>
                <Icon
                  className={styles.close}
                  type="close"
                  onClick={this._toggleMenu}
                />
                <Menu toggleMenu={this._toggleMenu} />
              </div>
            ) : (
              <Icon
                type="menu"
                onClick={this._toggleMenu}
                className={styles.burger}
              />
            )}
          </Mobile>
          <Default>
            <Menu />
          </Default>
        </div>
      </div>
    )
  }
}

export default Header
