import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import * as common from '../modules/common.module';
import Logo from '../components/logo';
import Form from '../components/loginForm';

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#58a5f0" barStyle="light-content" />
        <Logo />
        <Form type="Signup" />
        <View style={styles.signupTextContainer}>
          <Text style={styles.signupText}>Already have an account? </Text>
          <Text style={styles.signupButton}> SignIn</Text>
        </View>
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
  signupTextContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  signupText: {
    color: 'rgba(225, 225, 225, 0.7)',
    fontSize: 16,
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
});
