import React from "react"
import { View } from 'react-native'
import { UIActivityIndicator } from 'react-native-indicators';
import { Colors } from '../Themes'

export default ActivityIndicator = (props) => <View style={{flex: 1}}>
    <UIActivityIndicator count={props.size ? props.size : 12} color={props.color ? props.color : Colors.primary} />
</View>
