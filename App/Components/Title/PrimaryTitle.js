import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { Colors, Metrics } from '../../Themes'

export const PrimaryTitle = styled.Text`
  fontSize :${props => props.fontSize ? props.fontSize : Metrics.heightUnit(24)};
  fontWeight :${props => props.fontWeight ? props.fontWeight : "bold"};
  fontStyle :${props => props.fontStyle ? props.fontStyle : "normal"};
  textAlign :${props => props.textAlign ? props.textAlign : "center"};
  color :${props => props.color ? props.color : Colors.primary};
  padding:${props => props.padding ? props.padding : "0"};
  marginBottom: ${props => props.marginBottom ? props.marginBottom : Metrics.heightUnit(10)};
  lineHeight:${props => props.lineHeight ? props.lineHeight : Metrics.heightUnit(24)};
  letterSpacing:${props => props.letterSpacing ? props.letterSpacing : "0.22"};
  fontFamily:${props => props.fontFamily ? props.fontFamily : "Roboto-Bold"};
`

export default PrimaryTitleWrapper = (props) => (
    <PrimaryTitle {...props}>
    {
      props.id ?
        <FormattedMessage id={props.id} />
        :
        props.text
    }
    </PrimaryTitle>
)