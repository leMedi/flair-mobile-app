import React from 'react'
import _PrimaryTitle from './PrimaryTitle'
import _SecondaryTitle from './SecondaryTitle'

export default ({ primary, ...props }) => {
  return primary ? <_PrimaryTitle {...props} /> : <_SecondaryTitle {...props} />      
}

export const PrimaryTitle = _PrimaryTitle;
export const SecondaryTitle = _SecondaryTitle;