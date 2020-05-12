import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Form extends Component {
  render() {
    return (
      <View style={styels.position}>
        <TextInput
          style={styels.textInput}
          placeholder="Username"
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styels.textInput}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
        />

        <TouchableOpacity style={styels.button}>
          <Text style={styels.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styels = StyleSheet.create({
  position: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: 300,
    backgroundColor: 'rgba(225, 225, 225, 0.3)',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 16,
  },
  button: {
    backgroundColor: '#004c8c',
    width: 300,
    borderRadius: 25,
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});
