/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './src/pages/Home'
import SignUp from './src/pages/SignUp'
import SignIn from './src/pages/SignIn'
import Feed from './src/pages/Feed'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Feed);
