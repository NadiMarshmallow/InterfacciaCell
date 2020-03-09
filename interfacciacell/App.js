/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, AppRegistry, TextInput, ImageBackground, Button, TouchableOpacity } from 'react-native';
import sfondo from './sfondo.png'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (

      <ImageBackground source={sfondo} style={styles.container}>
        <View style={styles.campo}>
          <TextInput placeholder={'Inserisci email'} style={styles.TextInput} />
          <TextInput placeholder={'Inserisci Password'} style={styles.TextInput} />
          <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.3}>
            <Text style={styles.button}>Entra</Text>
          </TouchableOpacity>
          <Text>Hai dimenticato la Password?</Text>
        </View>
      </ImageBackground>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TextInput: {
    backgroundColor: 'white'

  },

  button: {
    alignItems: 'center',
    backgroundColor: '#bfd0e3',
    padding: 10,
    fontSize: 20,
  },
  campo: {
    flex: 1,
    justifyContent: 'center',



  }
})