import 'intl' // polyfill for react-intl
import { addLocaleData } from 'react-intl';

import fr from 'react-intl/locale-data/fr'


addLocaleData([...fr]);

