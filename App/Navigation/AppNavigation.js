import { createStackNavigator, createAppContainer } from 'react-navigation'
import SplashScreen from '../Containers/Splash'
import LoginScreen from '../Containers/Login/Login'
import DashboardScreen from '../Containers/Dashboard'
import ModuleScreen from '../Containers/Module'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  SplashScreen: { screen: SplashScreen },
  LoginScreen: { screen: LoginScreen },
  DashboardScreen: { screen: DashboardScreen },
  ModuleScreen: { screen: ModuleScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SplashScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
