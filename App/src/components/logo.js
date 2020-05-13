import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class Logo extends Component {
  render() {
    return (
      <View style={styels.position}>
        <Image
          source={require('../images/logo.png')}
          style={{width: 90, height: 90}}
        />
        <Text style={styels.text}>Welcome to Home Garden</Text>
      </View>
    );
  }
}

const styels = StyleSheet.create({
  position: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'rgba(225, 225, 225, 0.7)',
  },
});
