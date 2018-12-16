import React from 'react';
import { Image, View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { Metrics, Images } from '../../../Themes';

import Seances from './Seances'
import Modules from './Modules'

const { heightUnit, widthUnit } = Metrics;

const Tabs = createMaterialTopTabNavigator(
  {
    Seances: {
      screen: Seances,
      navigationOptions: {
        tabBarLabel: 'Seances',
        tabBarIcon: ({ tintColor }) => (
          <View style={{ width: widthUnit(20), height: widthUnit(20) }}>
            <Image source={Images.Dashboard.seancesIcon} resizeMode='contain' style={{ width: widthUnit(20), height: widthUnit(20) }} />
          </View>
        ),
      },
    },
    Modules: {
      screen: Modules,
      navigationOptions: {
        tabBarLabel: 'Modules',
        tabBarIcon: ({ tintColor }) => (
          <View style={{ width: widthUnit(20), height: widthUnit(20) }}>
            <Image source={Images.Dashboard.modulesIcon} style={{ width: widthUnit(20), height: widthUnit(20), resizeMode: 'contain' }} />
          </View>
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#ffffff',
      inactiveTintColor: 'rgba(255, 255, 255, 0.87)',
      indicatorStyle: {
        backgroundColor: '#ffffff',
        bottom: heightUnit(10),
        height: heightUnit(2)
      },
      style: { backgroundColor: 'transparent' },
      labelStyle: {
        fontSize: widthUnit(9),
        fontWeight: '500',
        textAlign: 'center'
      },
    }
  }
);

export default (Tabs);