import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Metrics, Colors } from '../Themes';
import Title from './Title';


export default class Header extends PureComponent {
  
  render() {
    return (
      <View style={{ flex: 1, paddingHorizontal: Metrics.widthUnit(3)}}>
        <View style={{ flexDirection: 'row' }}>
          <Title
            primary
            color={Colors.darkBlue}
            textAlign={this.props.textAlign ? this.props.textAlign : 'left'}
            id={this.props.titleID}
            text={this.props.titleText}
          >
          </Title>
        </View>
        <Title
          textAlign={this.props.textAlign ? this.props.textAlign : 'left'}
          id={this.props.subTitleID}
          text={this.props.subTitleText}
        />
      </View>
    )
  }
}


