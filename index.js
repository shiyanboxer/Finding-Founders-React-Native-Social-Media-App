import { registerRootComponent} from 'expo';
import {activateKeepAwake} from 'expo-keep-awake'
import App from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

if (process.env.NODE_ENV === 'development') {
  activateKeepAwake();
}

AppRegistry.registerComponent(appName, () => App);
registerRootComponent(App);
