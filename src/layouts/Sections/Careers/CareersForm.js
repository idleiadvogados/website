import React, { Component } from 'react'
import styles from './Careers.module.scss'
import { FormWrapper } from './FormWrapper'
import { validEmail } from '../utils'

class CareersForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      uploaded: false,
      isSubmitReady: false,
    }
  }
  _handleNameChange = e => {
    this.setState({ name: e.target.value })
  }
  _handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }
  _handleUploadFinished = () => {
    this.setState({ uploaded: true })
  }
  render() {
    const { title, subtitle } = this.props
    return (
      <div className={styles.form}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <FormWrapper
          handleNameChange={this._handleNameChange}
          handleEmailChange={this._handleEmailChange}
          handleOnUploadFinished={this._handleUploadFinished}
          isSubmitReady={this.state.name !== '' && validEmail(this.state.email)}
        />
      </div>
    )
  }
}

export default CareersForm
