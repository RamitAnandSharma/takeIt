import React, {Component} from 'react';
import { Platform, StyleSheet, View, Text, Button, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import Dimensions from 'Dimensions';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

import Wallpaper from './../../modules/Wallpaper';
import logoImg from '../../../assets/images/logo.png';
import bgSrc from '../../../assets/images/wallpaper.png';

import Icon from 'react-native-vector-icons/FontAwesome';
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

class LoginForm extends Component <Props, State> {
	textInput: any;
	autoCorrect:any = false;
	autoCapitalize:any ='none'
	returnKeyType:any = 'done';

	constructor()
  {
    super();
		this.state = { hidePassword: false }
  }
	managePasswordVisibility = () => { this.setState({ hidePassword: !this.state.hidePassword }); this.passwordInput.focus(); }
	renderUsername({ input, label, secureTextEntry, returnKeyType, type, meta: { touched, error, warning, handleSubmit, pristine, reset, submitting  } } ) {
		return (
				<View style={styles.inputMargin}>
					<TextInput style={styles.input} {...input} 	placeholder="Username" secureTextEntry={true} returnKeyType="next" placeholderTextColor="white" autoCapitalize="none"></TextInput>
					{touched && error && <Text style={styles.error} >{error}</Text>}
				</View>
		);
	}
	//Kiranna
	render() {
		return (
		<KeyboardAvoidingView style={styles.container} behaviour="padding" keyboardVerticalOffset={Platform.select({ ios: () => -100, android: () => -120 })()}>
		<ImageBackground source={bgSrc} style={styles.imgBackground} >
				<View style={styles.logoContainer}>
					<Image source={logoImg} style={styles.image} />
					<View style={{flexDirection: 'row', marginTop:10, alignItems: 'center', justifyContent: 'center',}}>
						<Text style={{fontSize: 23, color: '#333333'}}>Kiranna</Text>
						<Text >Store</Text>
					</View>
				</View>
				<View style={styles.containerLogin}>
					<Field name="username" type="text" validate={[ required, maxLength15 ]}  component={this.renderUsername}/>
					<Field name="password" type="text" ref={(input) => this.passwordInput = input} validate={[ required, minLength8, maxLength15 ]} component=
					 { ({ input, label, returnKeyType, type, meta: { touched, error, warning, handleSubmit, pristine, reset, submitting  } }) =>
						<View style={styles.inputMargin}>
							<TextInput style={styles.input} {...input} secureTextEntry={this.state.hidePassword}	placeholder="Password" returnKeyType="go" placeholderTextColor="white" autoCapitalize="none"></TextInput>
								<TouchableOpacity style={styles.showButton} onPress={ this.managePasswordVisibility}>
									<Icon style={styles.icon} name={( this.state.hidePassword )? 'eye' : 'eye-slash'} size={20}/>
								</TouchableOpacity>
								{touched && error && <Text style={styles.error}>{error}</Text>}
						</View>
		        } />
					<TouchableOpacity activeOpacity={0.7} onPress={() => this.login()} style={styles.buttonContainer}>
						<Text style={styles.buttonText}>LOGIN</Text>
					</TouchableOpacity>
			 </View>
	 	</ImageBackground>
		</KeyboardAvoidingView>
		);
	}

	login() {
		console.log(this.props.valid);
		if (this.props.valid) {
			//this.props.navigation.navigate("Drawer");  style={contentStyles.container} padder
		} else {
			// Toast.show({
			// 	text: "Enter Valid Username & password!",
			// 	duration: 2000,
			// 	position: "top",
			// 	textStyle: { textAlign: "center" },
			// });
		}
	}

	handleRegister() {
		console.log(this.props.valid);
		if (this.props.valid) {
			//this.props.navigation.navigate("Drawer");
		} else {
			// Toast.show({
			// 	text: "Enter Valid Username & password!",
			// 	duration: 2000,
			// 	position: "top",
			// 	textStyle: { textAlign: "center" },
			// });
		}
	}

}
const styles = StyleSheet.create({
	imgBackground: {
		width: DEVICE_WIDTH,
		height: DEVICE_HEIGHT,
		flex: 1,
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
		color: '#FFF',
		paddingHorizontal: 10,
		backgroundColor: 'rgba(255,255,255, 0.3)'
  },
  buttonContainer: {
		backgroundColor: 'rgba(255,255,255, 0.3)',
		paddingVertical: 15
  },
  buttonText: {
     textAlign:'center',
		 color:'#FFF',
		 fontWeight: '700'
  },
	showButton: {
     position: 'absolute',
     right: 10,
     top: 10
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
