import React, {Component} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

import Dimensions from 'Dimensions';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

import bgSrc from './../../assets/images/wallpaper.png';

export default class Wallpaper extends Component {
  render() {
    return (
      <ImageBackground source={bgSrc} style={styles.imgBackground} >
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    resizeMode:"cover"
  },
  imgBackground: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    // flex: 1,
    // position: 'absolute',
    // top: 0,
    // left: 0
  },
});
