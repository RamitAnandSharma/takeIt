import React, {Component} from 'react';
import { Platform, StyleSheet, View, Text, Button, TextInput, Image, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import Dimensions from 'Dimensions';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

import Wallpaper from './../../modules/Wallpaper';
import logoImg from '../../../assets/images/logo.png';
import bgSrc from '../../../assets/images/wallpaper.png';
import UserInput from './../../modules/UserInput';

import { Login } from "../../view/Login";

const required = value => (value ? undefined : "Required");
const maxLength = max => value => (value && value.length > max ? `Must be ${max} characters or less` : undefined);
const maxLength15 = maxLength(15);
const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or more` : undefined);
const minLength8 = minLength(8);
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Invalid email address" : undefined;
const alphaNumeric = value => (value && /[^a-zA-Z0-9 ]/i.test(value) ? "Only alphanumeric characters" : undefined);

export interface Props {
	navigation: any;
	valid: boolean;
}
export interface State {}

class LoginForm extends Component<Props, State> {
	textInput: any;

	renderInput( { input, keyboardType, label, type, meta: { touched, error, warning, handleSubmit, pristine, reset, submitting  } }) {
		return (
			<View style={{ flexDirection: 'column', height: 70, alignItems: 'flex-start' }}>
			<View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
					<Text style={{ fontSize: 14, fontWeight: 'bold', width: 80 }}>{label}</Text>
					<TextInput style={{ borderColor: 'steelblue', borderWidth: 1, height: 37, width: 220, padding: 5 }}
							keyboardType={keyboardType} {...input}
					>
					</TextInput>
			</View>
			{touched && ((error && <Text style={{ color: 'red' }}>{error}</Text>) ||(warning && <Text style={{ color: 'orange' }}>{warning}</Text>))}
	</View>
		);
	}

	render() {
		return (
		<Wallpaper>
		<View style={logoStyles.container}>
					<Image source={logoImg} style={logoStyles.image} />
					<Text style={logoStyles.brand}>REACT NATIVE</Text>
		</View>
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<Field name="username" type="text" component={this.renderInput} label="Username" validate={[ required, maxLength15 ]}/>
				<Field name="password" type="password" component={this.renderInput} label="Password" validate={[ required, minLength8, maxLength15 ]} />


				<TouchableOpacity activeOpacity={0.7}  onPress={() => this.login()} style={{ margin: 10, alignItems: 'center' }}>
                <Text style={{
                    backgroundColor: 'steelblue', color: 'white', fontSize: 16,
                    height: 37, width: 400, textAlign: 'center', padding: 10
                }}>Submit</Text>
            </TouchableOpacity>

			</KeyboardAvoidingView>
			<View style={signUpStyles.container}>
				<Text style={signUpStyles.text}>Create Account</Text>
				<Text style={signUpStyles.text}>Forgot Password?</Text>
			</View>
		</Wallpaper>
		);
	}
//
// <Button onPress={() => this.login()} title="Login" accessibilityLabel="Learn more about this purple button" />
// <Text style={signUpStyles.text} onPress={() => this.handleRegister()}>Create Account</Text>
// <Text style={signUpStyles.text} onPress={() => this.handleRegister()}>Forgot Password?</Text>
	login() {
		console.log(this.props.valid);
		if (this.props.valid) {
			//this.props.navigation.navigate("Drawer");  style={contentStyles.container} padder
		} else {
			Toast.show({
				text: "Enter Valid Username & password!",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		}
	}

	handleRegister() {
		console.log(this.props.valid);
		if (this.props.valid) {
			//this.props.navigation.navigate("Drawer");
		} else {
			Toast.show({
				text: "Enter Valid Username & password!",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});
		}
	}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
});
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

const LoginContainer = reduxForm({
	form: "login",
  // initialValues: {
  //   country: 'Brazil'
	//
})(LoginForm);
export default LoginContainer;
