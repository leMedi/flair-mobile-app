import React from "react"
import { View, Image } from 'react-native'
import Title from "../Title";
import TextRow from './TextRow'
import { Metrics } from '../../Themes';
import styles from './style'

const { heightUnit, widthUnit } = Metrics

export default ({ _module, image }) => (
  <View style={styles.cardContainer}>
    <Image source={image} style={styles.img} />

    <View style={styles.cardContainer}>
      <View>
        <Title style={styles.container}
          fontSize={heightUnit(24)}
          color={"#ffffff"}
          fontWeight={'500'}
          textAlign={'center'}
          letterSpacing={0.1}
          lineHeight={heightUnit(24)}
          fontFamily={"Roboto-Medium"}
          text={_module.name}
        />
      </View>
      
      <View style={styles.textRowContainer}>
        <TextRow
          label="Proffesseur"
          text={_module.prof}
        />
        <TextRow
          label="Classe"
          text={_module.classe}
        />

        <TextRow
          label="Cours"
          text={_module.chargeHoraire.cours}
        />
        <TextRow
          label="TD"
          text={_module.chargeHoraire.td}
        />
        <TextRow
          label="TD"
          text={_module.chargeHoraire.tp}
        />
      </View>

    </View>
  </View>
)