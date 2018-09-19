import React, { Component } from 'react'
import { Container } from '../../Layout/Container'
import { FormWrapper } from './FormWrapper'
import { validEmail } from '../utils'
import styles from './Contacts.module.scss'

class Contacts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
    }
  }
  _handleNameChange = e => {
    this.setState({ name: e.target.value })
  }
  _handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }
  render() {
    const {
      title,
      subtitle,
      phone,
      fax,
      officePhoto,
      address,
      link,
    } = this.props
    const photo = officePhoto
      ? officePhoto.replace('/assets/', '')
      : 'reception.jpg'
    return (
      <div className={styles.contacts}>
        <div className={styles.contactsContainer}>
          <div className={styles.form}>
            <div className={styles.formHeader}>
              <div className={styles.title}>{title}</div>
              <div className={styles.subtitle}>{subtitle}</div>
            </div>
            <FormWrapper
              handleNameChange={this._handleNameChange}
              handleEmailChange={this._handleEmailChange}
              isSubmitReady={
                this.state.name !== '' && validEmail(this.state.email)
              }
            />
          </div>
          <div className={styles.info}>
            <img
              className={styles.contactsPhoto}
              src={require(`!url!assets/${photo}`)}
            />
            <div className={styles.contactInfo}>
              <div className={styles.phoneFax}>
                <span>
                  <span className={styles.textLabel}>t -</span>
                  <span className={styles.text}>{phone}</span>
                </span>
                <span className={styles.fax}>
                  <span className={styles.textLabel}>f -</span>
                  <span className={styles.text}>{fax}</span>
                </span>
              </div>
              <div className={styles.address}>
                <span className={styles.text}>{address}</span>
                <span className={styles.mapLink}>
                  <a href={link} target="_blank">
                    View on the map
                  </a>
                </span>
              </div>
            </div>
            <div className={styles.square} />
          </div>
        </div>
        <div className={styles.backgroundSquare} />
      </div>
    )
  }
}

export default Contacts
