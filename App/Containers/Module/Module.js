import React, { Component } from "react";
import { View, ScrollView, FlatList, Image } from "react-native";
import { SafeAreaView } from 'react-navigation';
import ModuleHeader from '../../Components/ModuleHeader'
import styles from './style';
import ActivityIndicator from '../../Components/ActivityIndicator';
import LinearGradient from 'react-native-linear-gradient';
import { Metrics, Images } from '../../Themes';

const { heightUnit } = Metrics


export default class ContractDetails extends Component {

  _module = {
    name: 'JAVA',
    classe: 'GI 2018',
    prof: 'Imad HAFIDI',
    chargeHoraire: {
      cours: 80,
      td: 30,
      tp: 70
    }
  }

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    // Get Module Info
  }

  render() {
    return (
      <SafeAreaView style={styles.globalContainer}>
        { this.props.isLoading && this.props.contractDetails === null ?
          <View style={styles.loaderContainer}>
            <ActivityIndicator/>
          </View>
        :
          <View>
            <ScrollView>
              <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#3b45c3', '#1c89fd']} style={styles.linearGradient} >
                <Image source={Images.Module.background} style={styles.background} />
                <View style={styles.containerPadding}>
                  <ModuleHeader _module={this._module} image={Images.Dashboard.menuIcon} />
                </View>
              </LinearGradient>
              <View style={[{ marginTop: heightUnit(-45) }, styles.containerPadding]}>
                <View style={styles.accordionsContainer}>
                  
                </View>
              </View>
            </ScrollView>
          </View>
        }
      </SafeAreaView>
    );
  }
}
