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
	autoCorrect:any = false;
	autoCapitalize:any ='none'
	returnKeyType:any = 'done';

	renderInput( { input, label, secureTextEntry, type, meta: { touched, error, warning, handleSubmit, pristine, reset, submitting  } }) {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					placeholder={label}
					secureTextEntry={secureTextEntry}
					autoCorrect={this.autoCorrect}
					autoCapitalize={this.autoCapitalize}
					returnKeyType={this.returnKeyType}
					placeholderTextColor="white"
					underlineColorAndroid="transparent"
					{...input}
				/>
				{touched &&  ( (error && <Text>{error}</Text>) || (warning && <Text>{warning}</Text>))}
			</View>

		);
	}

	render() {
		return (
		<Wallpaper>
			<View  style={{flex: 1, paddingHorizontal:10}} >
				<View style={styles.containerImage}>
							<Image source={logoImg} style={styles.image} />
							<Text style={styles.brand}>REACT NATIVES</Text>
				</View>
				<KeyboardAvoidingView behavior="padding" style={styles.container}>
					<Field name="username" type="text" component={this.renderInput} secureTextEntry={false} label="Username" validate={[ required, maxLength15 ]}/>
					<Field name="password" type="password" component={this.renderInput} secureTextEntry={true}  label="Password" validate={[ required, minLength8, maxLength15 ]} />
				</KeyboardAvoidingView>
				<View style={styles.containerLogin}>
					<TouchableOpacity activeOpacity={0.7} onPress={() => this.login()} style={styles.button}>
						<Text> Login </Text>
					</TouchableOpacity>
				</View>
				<View style={styles.containerSignup}>
					<Text style={styles.text}>Create Account</Text>
					<Text style={styles.text}>Forgot Password?</Text>
				</View>
			</View>
		</Wallpaper>
		);
	}
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

const inputstyles = StyleSheet.create({

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
  },
	input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		//width: DEVICE_WIDTH - 40,
		height: 40,
		//marginHorizontal: 20,
		paddingLeft: 20,
		borderRadius: 20,
		color: '#ffffff',
	},
	inlineImg: {
		position: 'absolute',
		zIndex: 99,
		width: 22,
		height: 22,
		left: 35,
		top: 9,
	},
	containerImage: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 80,
		height: 80,
	},
	brand: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: 20,
	},
	containerLogin: {
		flex: 1,
		justifyContent: 'center',
		//paddingHorizontal: 10
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#DDDDDD',
		padding: 10
	},
	text: {
    color: 'white',
    backgroundColor: 'transparent',
  },
	containerSignup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
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


const LoginContainer = reduxForm({
	form: "login",
})(LoginForm);
export default LoginContainer;
