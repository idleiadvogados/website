import React from 'react'
import Logo from '-!svg-react-loader!assets/Logo.svg'
import Menu from '-!svg-react-loader!assets/Menu.svg'
import Close from '-!svg-react-loader!assets/Close.svg'

const icons = {
  logo: <Logo />,
  menu: <Menu />,
  close: <Close />,
}

const Icon = ({ type, onClick, className }) => {
  return (
    <div onClick={onClick} className={className}>
      {icons[type]}
    </div>
  )
}

export default Icon
