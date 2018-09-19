import React, { Component } from 'react'
import FloatingLabel from 'floating-label-react'
import { Button } from '../../../Button'
import styles from './FormWrapper.module.scss'
import { formInputProps } from '../../../constants'

class FormWrapper extends Component {
  render() {
    const {
      handleNameChange,
      handleEmailChange,
      handleOnUploadFinished,
      isSubmitReady,
    } = this.props
    return (
      <form
        className={styles.form}
        action={'https://formspree.io/cecilia.gouveia@idlei.com'}
        method={'POST'}
      >
        <div className={styles.textInputs}>
          <FloatingLabel
            placeholder="Nome"
            name="nome"
            onChange={handleNameChange}
            styles={formInputProps}
          />
          <FloatingLabel
            placeholder="Email"
            name="email"
            onChange={handleEmailChange}
            styles={formInputProps}
          />
          <input
            type="hidden"
            role="uploadcare-uploader"
            name="cv"
            data-crop="disabled"
          />
        </div>
        <Button
          buttonType="fullButton"
          text="Enviar"
          active={isSubmitReady}
          type={isSubmitReady ? 'submit' : 'button'}
        />
      </form>
    )
  }
}

export default FormWrapper
