import React, { Component } from 'react'
import { View, Image, ImageBackground, StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Metrics, Images } from '../../Themes'
import Title from '../../Components/Title'
import Tabs from './Tabs'
import styles from './styles'

const { heightUnit, widthUnit } = Metrics;

class dashboard extends Component {
  static router = Tabs.router;


  constructor(props) {
    super(props);
    // this.bgHandler = this.bgHandler.bind(this)
  }

  bgHandler(type) {
    // switch (type) {
    //   case 'MRH': return Images.mrhBg;
    //   case 'MAZAYA': return Images.mazayaBg;
    //   case 'AUTO': return Images.autoBg;
    //   case 'HEALTH': return Images.santeBg;
    //   default: return Images.autoBg;
    // }
  }

  render() {
    return (
      <LinearGradient start={{ x: 0, y: 0.75 }} end={{ x: 1, y: 0.25 }} colors={['#3b45c3', '#1c89fd']} style={styles.linearGradient} >
        {/* <ImageBackground source={this.bgHandler(this.props.bgDashboard)} style={{ width: '100%', height: '100%' }}> */}
        <View style={{ width: '100%', height: '100%' }}>
          <StatusBar translucent={true} backgroundColor={'transparent'} />
          <View style={styles.headerContainer}>
            <View style={{ height: heightUnit(39), width: widthUnit(140) }}>
              <Title primary text="Flair" textAlign="left" color="#FFFFFF" />
            </View>
            <View style={{ height: widthUnit(24), width: widthUnit(24), justifyContent: 'center', alignItems: 'center' }}>
              <Image source={Images.Dashboard.menuIcon} style={{ resizeMode: 'contain', height: widthUnit(24), width: widthUnit(24), }} />
            </View>
          </View>
          <View style={{ flex: 1 }} >
              <Tabs navigation={this.props.navigation} />
          </View>
        </View>
        {/* </ImageBackground> */}
      </LinearGradient>
    );
  }
}

export default dashboard;