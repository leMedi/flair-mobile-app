import React from 'react';
import { View, Image } from 'react-native';
import ActivityIndicator from '../../Components/ActivityIndicator';
import styles from './styles'
import { Colors, Images } from '../../Themes/'


export default class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    setTimeout(() => {
        this.props.navigation.navigate('LoginScreen');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerLogo} >
          <Image source={Images.logoSpark} style={styles.logo} />
        </View>
        <View style={styles.containerLoader}>
          <ActivityIndicator color={Colors.primary} />
        </View>
        <View style={styles.containerSlogan} >
          <Image source={Images.slogan} style={styles.slogan} />
        </View>
      </View>
    );
  }
}
