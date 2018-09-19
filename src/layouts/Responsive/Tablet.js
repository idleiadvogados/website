import React from 'react'
import Responsive from 'react-responsive'

export const Tablet = props => (
  <Responsive {...props} minWidth={900} maxWidth={1199} />
)

export default Tablet
