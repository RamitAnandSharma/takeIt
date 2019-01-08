import React, {Component} from 'react';
import { Image, Platform } from "react-native";

import {StyleSheet, View, Text, Button} from 'react-native';

import Wallpaper from './../../modules/Wallpaper';
import logoImg from '../../../assets/images/logo.png';
import bgSrc from '../../../assets/images/wallpaper.png';

import Dimensions from 'Dimensions';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export interface Props {
	loginForm: any;
	onLogin: Function;
}
export interface State {}
export default class Login extends  Component<Props, State> {
	render() {

		return (
			<Wallpaper>
				<View style={styles.container}>
			        <Image source={logoImg} style={styles.image} />
			        <Text style={logoStyles.brand}>REACT NATIVE</Text>
			  </View>
				<View style={contentStyles.container} padder>
					<Button onPress={() => this.props.onLogin()} title="Login" accessibilityLabel="Learn more about this purple button" />
				</View>
				<View style={signUpStyles.container}>
	        <Text style={signUpStyles.text}>Create Account</Text>
	        <Text style={signUpStyles.text}>Forgot Password?</Text>
				</View>
			</Wallpaper>
		);
	}
}

const logoStyles = StyleSheet.create({
	container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
});
const signUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    top: 65,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
});

//
//
// const styles = StyleSheet.create({
// 	container: {
//     flex: 1,
//     paddingTop: 100,
//     backgroundColor: '#95D3BF',
//   },
// 	image: {
//     width: 80,
//     height: 80,flex: 3,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// 	brand: {
//     color: 'white',
//     fontWeight: 'bold',
//     backgroundColor: 'transparent',
//     marginTop: 20,
//   },
// });
// const signUpStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     top: 65,
//     width: DEVICE_WIDTH,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   text: {
//     color: 'white',
//     backgroundColor: 'transparent',
//   },
// });
// const logoStyles = StyleSheet.create({
//   container: {
//     flex: 3,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: 80,
//     height: 80,flex: 3,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'white',
//     fontWeight: 'bold',
//     backgroundColor: 'transparent',
//     marginTop: 20,
//   },
// });
