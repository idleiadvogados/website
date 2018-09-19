import React, { Component } from 'react'
import FloatingLabel from 'floating-label-react'
import { Button } from '../../../Button'
import styles from './FormWrapper.module.scss'
import { formInputProps } from '../../../constants'

class FormWrapper extends Component {
  render() {
    const { isSubmitReady, handleNameChange, handleEmailChange } = this.props
    return (
      <form
        className={styles.form}
        action="https://formspree.io/cecilia.gouveia@idlei.com"
        method="POST"
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
          <FloatingLabel
            placeholder="Assunto"
            name="assunto"
            styles={formInputProps}
          />
          <FloatingLabel
            placeholder="Mensagem"
            multiline
            rowsMax="4"
            name="mensagem"
            styles={formInputProps}
          />
          <input
            type="hidden"
            role="uploadcare-uploader"
            name="documentos"
            data-crop="disabled"
            data-multiple="true"
          />
        </div>
        <Button
          type={isSubmitReady ? 'submit' : 'button'}
          active={isSubmitReady}
          buttonType="fullButton"
          text="Enviar"
        />
      </form>
    )
  }
}

export default FormWrapper
