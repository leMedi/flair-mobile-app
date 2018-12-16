import React from "react";
import { View } from 'react-native';
import Title from "../Title";
import { Metrics } from '../../Themes';

const { heightUnit } = Metrics;

export default InfoRow = ({ labelId, labelText, text }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}
  >
    <Title
      fontSize={heightUnit(13)}
      color={"#575e71"}
      fontWeight={'normal'}
      textAlign={'left'}
      letterSpacing={0.1}
      lineHeight={heightUnit(24)}
      fontFamily={"Roboto-Regular"}
      id={labelId}
      text={labelText}
    />
    <Title
      fontSize={heightUnit(13)}
      fontWeight={'500'}
      color={"#566684"}
      textAlign={'right'}
      letterSpacing={0.1}
      lineHeight={heightUnit(24)}
      fontFamily={"Roboto-Medium"}
      text={text}
    />
  </View>
)