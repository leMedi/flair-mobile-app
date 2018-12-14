import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { Colors, Metrics } from '../../Themes'

export const SecondaryTitle = styled.Text`
  fontSize :${props => props.fontSize ? props.fontSize : Metrics.heightUnit(16)};
  fontWeight :${props => props.fontWeight ? props.fontWeight : "normal"};
  fontStyle :${props => props.fontStyle ? props.fontStyle : "normal"};
  textAlign :${props => props.textAlign ? props.textAlign : "center"};
  color :${props => props.color ? props.color : Colors.secondary};
  padding:${props => props.padding ? props.padding : "0"};
  lineHeight:${props => props.lineHeight ? props.lineHeight : Metrics.heightUnit(20)};
  letterSpacing:${props => props.letterSpacing ? props.letterSpacing : "-0.4"};
  fontFamily:${props => props.fontFamily ? props.fontFamily : "Roboto-Regular"};
`

export default SecondaryTitleWrapper = (props) => (
    <SecondaryTitle {...props}>
    {
      props.id ?
        <FormattedMessage id={props.id} />
        :
        props.text
    }
    </SecondaryTitle>
)