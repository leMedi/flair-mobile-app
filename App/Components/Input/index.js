import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Metrics, Colors } from '../../Themes';

const { primary, error, text, placeholder } = Colors;

export const Input = ({innerRef, rightIcon, iconColor, ...props}) => (
    <View>
      <TextInput
        ref={innerRef}
        {...props}
        theme={{ colors: { primary, error, text, placeholder } }}
      />
      {
        props.rightIcon &&
        <View style={{ justifyContent:'center', alignItems:'center', marginTop: Metrics.heightUnit(20), left: Metrics.screenWidth - Metrics.widthUnit(70), alignItems: 'flex-end', position: 'absolute', justifyContent: 'flex-end' }}>
          <TouchableOpacity style={{height: Metrics.heightUnit(40), width: Metrics.widthUnit(60)}} onPressIn={props.onPressInIcon} onPressOut={props.onPressOutIcon}>
            <Feather
              name={rightIcon}
              size={20}
              color={iconColor}
            />
          </TouchableOpacity>
        </View>
      }
    </View>
)

export default Input