/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Splash from './src/pages/splashScreen';
import Login from './src/pages/login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Navigator from './src/routes/LoginStack'

export default class App extends Component<{}>{
  render(){
    return(
      <View>
      <Statusbar backgroundColor = "#ffffff"
      barStyle="light-content"/>
      <Navigator/>
      </View>
    );
  }
}
