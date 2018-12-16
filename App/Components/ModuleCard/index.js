import React from "react"
import { Image, View, Text, TouchableOpacity } from 'react-native'
import { Metrics } from '../../Themes';
import styles from './style';

const { widthUnit } = Metrics;

export default ModuleCard = ({ _module = {}, image, onPress = () => null }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.imageContainer}>
        <Image resizeMode='contain' style={{ width: widthUnit(43), height: widthUnit(43) }} source={image} />
    </View>
    <Text style={styles.subTitle} >{_module.name}</Text>
  </TouchableOpacity>
)
