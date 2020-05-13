import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import * as common from '../modules/common.module';
import Logo from '../components/logo';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#004c8c" barStyle="light-content" />
        <Logo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: common.primary_color,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#ffffff',
    fontSize: 18,
  },
});
