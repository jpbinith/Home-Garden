import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default class Form extends Component {
  render() {
    return (
      <View style={styels.position}>
        <TextInput style={styels.textInput} placeholder="Username" />
      </View>
    );
  }
}

const styels = StyleSheet.create({
  position: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 300,
    backgroundColor: 'rgba(225, 225, 225, 0.3)',
    borderRadius: 25,
    paddingHorizontal: 20,
  },
});
