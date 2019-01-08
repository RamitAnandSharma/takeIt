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

	// toggleShowPassword(secureTextEntry) {
	//     this.setState({ secureTextEntry: !secureTextEntry });
	//   }
	toggleShowPassword = () => this.setState({secureTextEntry: !this.state.secureTextEntry});
	renderInput( { input, label, secureTextEntry, returnKeyType, type, meta: { touched, error, warning, handleSubmit, pristine, reset, submitting  } }) {
		return (
			<TextInput style={inputStyles.input} 	placeholder={label} secureTextEntry={secureTextEntry} returnKeyType={this.returnKeyType} onSubmitEditing={() =>  this.passwordInput.focus()} KeyboardType="email-address"/>
	 	 //<TextInput placeholder="password" style={stylesLogin.input}  returnKeyType="go" ref={(input) => this.passwordInput = input}/>
			// <View style={inputStyles.inputWrapper}>
			// 	<TextInput
			// 		style={inputStyles.input}
			// 		placeholder={label}
			// 		secureTextEntry={secureTextEntry}
			// 		autoCorrect={this.autoCorrect}
			// 		autoCapitalize={this.autoCapitalize}
			// 		returnKeyType={this.returnKeyType}
			// 		placeholderTextColor="white"
			// 		underlineColorAndroid="transparent"
			// 		{...input}
			// 	/>
			// 	{touched &&  ( (error && <Text>{error}</Text>) || (warning && <Text>{warning}</Text>))}
			// </View>
		);
	}

	render() {
		return (
		<KeyboardAvoidingView style={styles.container} behaviour="padding">
				<View style={styles.logoContainer}>
					<Image source={logoImg} style={styles.image} />
					<Text style={styles.text}>REACT NATIVE</Text>
				</View>
				<View style={stylesLogin.container}>
					 // <TextInput placeholder="username" style={stylesLogin.input} returnKeyType="next" onSubmitEditing={() =>  this.passwordInput.focus()} KeyboardType="email-address"/>
	 				 // <TextInput placeholder="password" style={stylesLogin.input}  returnKeyType="go" ref={(input) => this.passwordInput = input}/>

					 <Field name="username" type="text" component={this.renderInput}  returnKeyType="next"  secureTextEntry={false} label="Username" onSubmitEditing={() =>  this.passwordInput.focus()} validate={[ required, maxLength15 ]} />
					 <Field name="password" type="password" component={this.renderInput} returnKeyType="go" secureTextEntry={true}  label="Password" ref={(input) => this.passwordInput = input} validate={[ required, minLength8, maxLength15 ]} />

					<TouchableOpacity activeOpacity={0.7} onPress={() => this.login()} style={stylesLogin.buttonContainer}>
						<Text style={stylesLogin.buttonText}>LOGIN</Text>
					</TouchableOpacity>
			 </View>
		</KeyboardAvoidingView>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#3498db'
  },
	logoContainer: {
		alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  inputWrapper: {
    flex: 1,
  },
  image: {
    width: 80,
		height: 80
	},
  text: {
    marginTop: 10,
    width: 150,
		textAlign: 'center',
		opacity:0.9,
		color:'#FFF'
	},
});

const stylesLogin = StyleSheet.create({
  container: {
    padding: 20,
  },
	input: {
		height: 40,
		marginBottom:20,
		color: '#FFF',
		paddingHorizontal: 10,
		backgroundColor: 'rgba(255,255,255, 0.2)'
  },
  buttonContainer: {
		backgroundColor: 'rgba(255,255,255, 0.2)',
		paddingVertical: 15
  },
  buttonText: {
     textAlign:'center',
		 color:'#FFF',
		 fontWeight: '700'
  },
});




const LoginContainer = reduxForm({
	form: "login",
})(LoginForm);
export default LoginContainer;
