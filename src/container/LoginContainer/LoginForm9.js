import React, {Component} from 'react';
import { Platform, StyleSheet, View, Text, Button, TextInput, Image, Animated, KeyboardAvoidingView, TouchableNativeFeedback, TouchableOpacity, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import Dimensions from 'Dimensions';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

import logoImg from '../../../assets/images/logo.png';
import bgSrc from '../../../assets/images/wallpaper.png';

import Icon from 'react-native-vector-icons/FontAwesome';
import FloatingLabelInput from './FloatingLabelInput';

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

class LoginForm extends Component <Props, State> {
	textInput: any;
	autoCorrect:any = false;
	autoCapitalize:any ='none'
	returnKeyType:any = 'done';

	constructor() {
    super();
		this.state = {
			hidePassword: false,
			isFocused: false,
			username: '',
			password: ''
		}
  }





	managePasswordVisibility = () => { this.setState({ hidePassword: !this.state.hidePassword }); this.passwordInput.focus(); }
	renderUsername({ input, label, secureTextEntry, returnKeyType, type, meta: { touched, error, warning, handleSubmit, pristine, reset, submitting  } } ) {
		return (
				<View style={styles.inputMargin}>
					<TextInput style={styles.input} {...input} 	placeholder="Username" secureTextEntry={true} returnKeyType="next"  autoCapitalize="none"></TextInput>
					{touched && error && <Text style={styles.error} >{error}</Text>}
				</View>
		);
	}
	//Kiranna


		handleTextChangePassword = (value) => this.setState({ password: value });

		handleTextChange = (value) => {
			//input.onChange(value);
			console.log("Hi:  "+value);
			
			this.setState({ username: value });
		}

	render() {
		const { label, ...props } = this.props;
    const { isFocused } = this.state;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: !isFocused ? 18 : 0,
      fontSize: !isFocused ? 20 : 14,
      color: !isFocused ? '#aaa' : '#000',
    };
		return (
		<KeyboardAvoidingView style={styles.container} behaviour="padding" keyboardVerticalOffset={Platform.select({ ios: () => -100, android: () => -120 })()}>

				<View style={styles.containerLogin}>

	 				<Field name="username" label="Username" type="text" validate={[ required, maxLength15 ]} onChange={this.handleTextChange}  component={
						({ input, label, returnKeyType, type, meta: { touched, error, warning, handleSubmit, pristine, reset, submitting  } }) =>
						<View style={{ flex: 1, padding: 50, backgroundColor: '#f5fcff' }}>
							<FloatingLabelInput {...input} label="Username" value={this.state.username} onChange={(event, index, value) => input.onChange(value)} />

							<Text style={styles.error} style={styles.error} >A--->> {touched} {error} {pristine}</Text>
							{touched && error && <Text style={styles.error} >{error}</Text>}
						</View>
					}/>




					<Field name="password" label="Password" type="text" validate={[ required, minLength8, maxLength15 ]}  component={
						({ input, label, returnKeyType, type, meta: { touched, error, warning, handleSubmit, pristine, reset, submitting  } }) =>
						<View style={{ flex: 1, padding: 50, backgroundColor: '#f5fcff' }}>
							<FloatingLabelInput label="Password" value={this.state.password} onChangeText={this.handleTextChangePassword} />
							{touched && error && <Text style={styles.error} >{error}</Text>}
						</View>
					}/>
					<TouchableOpacity activeOpacity={0.7} onPress={() => this.login()} style={styles.buttonContainer}>
						<Text style={styles.buttonText}>LOGIN</Text>
					</TouchableOpacity>
			 </View>
		</KeyboardAvoidingView>
		);
	}

	login() {
		console.log(this.props.valid);
		if (this.props.valid) {

		} else {

		}
	}

	handleRegister() {
		console.log(this.props.valid);
		if (this.props.valid) {

		} else {

		}
	}

}
const styles = StyleSheet.create({
	// customBtnText: {
	//   color: "#fff",
	// },
	// customBtnBG: {
	// 	backgroundColor: "#007aff",
	// 	paddingHorizontal: 30,
	// 	paddingVertical: 5,
	// },
	buttonContainer: {
		backgroundColor: "#007aff",
		paddingVertical: 10,
		//borderWidth: 1,
		// borderColor: "#007aff",
    // borderRadius: 10,
		// height: 40,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	buttonText: {
			//flex: 1,
		 textAlign:'center',
		 color:'#FFF',
		 //color:'#007aff',
		 fontWeight: '700'
	},
	showButton: {
		 position: 'absolute',
		 right: 10,
		 top: 10
	 },
  container: {
    flex: 1,
		//backgroundColor: '#3498db'
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
    width: 60,
		height: 100
	},
  brand: {
    marginTop: 10,
		textAlign: 'center',
		opacity:0.9,
		color:'#FFF',
		fontWeight: 'bold',
		fontStyle: 'italic',
		fontSize: 20,
	},
  containerLogin: {
    padding: 20,
  },
	inputMargin: {
		marginBottom:20,
	},
	input: {
		height: 40,
		//color: '#FFF',
		paddingHorizontal: 10,
		//backgroundColor: 'rgba(255,255,255, 0.3)',
		color: '#000',
		borderBottomWidth: 1,
		borderBottomColor: '#555'
  },
   icon: {
     color: '#FFF',
   },
	 error :{
		 color: 'red'
	 }
});




const LoginContainer = reduxForm({
	form: "login",
})(LoginForm);
export default LoginContainer;
