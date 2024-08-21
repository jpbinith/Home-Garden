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

const MainNavigator = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator>
        <MainNavigator.Screen name="Login" component={Login} />
        <MainNavigator.Screen name="Splash" component={Splash} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
