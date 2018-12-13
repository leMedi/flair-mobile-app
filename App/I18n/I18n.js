// @flow

import I18n from 'react-native-languages'

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

// English language is the main language for fall back:
I18n.translations = {
  en: require('./languages/en.json')
}

let languageCode = I18n.locale.substr(0, 2)

// All other translations for the app goes to the respective language file:
switch (languageCode) {
  case 'ar':
    I18n.translations.ar = require('./languages/ar.json')
    break
  case 'fr':
    I18n.translations.fr = require('./languages/fr.json')
    break
}
