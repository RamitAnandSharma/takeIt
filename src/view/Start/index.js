import React, { Component } from 'react';
import { Platform,  StyleSheet, TextInput, TouchableOpacity, Image, Button, Text, View } from 'react-native';

import logoImg from '../../../assets/images/logo.png';

const onboardContent = 'By choosing us we will help you explore the world in a simple and fun ways and see places you have never seen before. Above all, we will have the opportunity to make new friends.';

export interface Props {}
export interface State {}
export default class Start extends  Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boardicon}>
          <Image source={logoImg} style={{width:200, height:150}} />
        </View>
        <Text style={styles.welcome}> Explore New World </Text>
        <Text style={styles.instructions}>{onboardContent} </Text>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => 'Button has been pressed'} style={styles.startButton}>
            <Text style={{color: 'white'}}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#95D3BF',
  },
  welcome: {
    fontSize: 16,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    color: '#225344',
    marginLeft: 24,
    marginRight: 24,
    fontSize: 12,
    lineHeight: 18
  },
  boardicon: {
    alignItems: 'center',
    marginTop: 50
  },
  footer:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0
  },
  startButton: {
    width: 300,
    height: 45,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  }
});
