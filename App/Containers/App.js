import { Text } from 'react-native'
import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import RNLanguages from 'react-native-languages'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl';
import RootContainer from './RootContainer'
import createStore from '../Redux'

import '../I18n';
import LocalFr from '../I18n/languages/fr.json';



// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <IntlProvider locale="fr" messages={LocalFr} textComponent={Text}>
          <RootContainer />
        </IntlProvider>
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
