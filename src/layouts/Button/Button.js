import React from 'react'
import styles from './Button.module.scss'

const buttonStyles = {
  fullButton: styles.fullButton,
  outlinedButton: styles.outlinedButton,
}

const Button = ({
  buttonType,
  text,
  onClick,
  active = false,
  type,
  className,
}) => {
  return (
    <button
      type={type}
      className={`${
        buttonType === 'fullButton' && active ? styles.active : ''
      } ${buttonStyles[buttonType]} ${styles.button} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
