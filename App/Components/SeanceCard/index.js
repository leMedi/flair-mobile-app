import React from "react"
import { View, TouchableOpacity } from 'react-native'
import Feather from "react-native-vector-icons/Feather";
import InfoRow from './InfoRow';
import Title from "../Title";
import { Metrics } from '../../Themes';
import styles from './style';

const { heightUnit } = Metrics;

export default SeanceCard = ({ seance = {}, onPress = () => null }) => (
  <TouchableOpacity
    style={styles.carteContainer}
    onPress={onPress}
  >
    <View style={styles.headerSection}>
        <View style={{ flexDirection: 'row', flex: 1}}>
          <Title
            fontSize={heightUnit(19)}
            letterSpacing={0.1}
            lineHeight={heightUnit(24)}
            color={"#062c80"}
            fontWeight={'500'}
            textAlign={'center'}
            fontFamily={"Roboto-Medium"}
            text={seance.module}
          />
          <View style={styles.chevronContainer}>
            <Feather name="chevron-right" size={heightUnit(20)} color='#2682f4' />
          </View>
        </View>
      </View>

      <InfoRow
        labelText="name"
        text={seance.name}
      />

      <InfoRow
        labelText="date"
        text={seance.date}
      />
  </TouchableOpacity>
)
