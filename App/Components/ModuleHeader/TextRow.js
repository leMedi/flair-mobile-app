import React from "react";
import { View } from 'react-native';
import Title from "../Title";
import { Metrics } from '../../Themes';

const { heightUnit } = Metrics;

export default InfoRow = ({ labelId, label, text, ...props }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}
  >
    <Title
      fontSize={heightUnit(14)}
      color={'#FFFFFF'}
      textAlign={'left'}
      fontWeigth={'normal'}
      letterSpacing={0.1}
      lineHeight={heightUnit(24)}
      fontFamily={"Roboto-Light"}
      id={labelId}
      text={label}
    />
    <Title
      fontSize={heightUnit(14)}
      color={'#FFFFFF'}
      textAlign={'right'}
      letterSpacing={0.1}
      lineHeight={heightUnit(24)}
      fontFamily={"Roboto-Regular"}
      text={text}
    />
  </View>
)