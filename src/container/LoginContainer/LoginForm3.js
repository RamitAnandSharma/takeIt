import React, {Component} from 'react';
import { Container, Grid, Header, Content, Form, Body, Title, Button, Text, View, Item, Input, Label, Icon, Toast, Footer } from "native-base";
import { Field, reduxForm } from 'redux-form';
import { Platform, StyleSheet, Image } from 'react-native';
import {Login} from "../../view/Login";
import logo from '../../../assets/logo.png'

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

	renderInput( { input, label, type, meta: { touched, error, warning, handleSubmit, pristine, reset, submitting  } }) {
		return (
			<Item >
					<Icon active name={input.name === "password" ? "unlock": "person" } />
          <Input placeholder={label} type={type} secureTextEntry={input.type === "password" ? true : false}
					{...input} ref={c => (this.textInput = c)} />
					{touched &&  ( (error && <Text>{error}</Text>) || (warning && <Text>{warning}</Text>))}
			</Item>
		);
	}
	render() {
		// const form = (
		// 	<Form >
		// 		<Field name="username" type="text" component={this.renderInput} label="Username" validate={[ required, maxLength15 ]}/>
		// 		<Field name="password" type="text" component={this.renderInput} label="Password" validate={[ required, minLength8, maxLength15 ]} />
		// 	</Form>
		// );
		// return (<Login loginForm={form} onLogin={() => this.login()} />);

				// <Grid >
				// 		<Image source={logo} />
				// </Grid>
				// <Grid >
				// 				<Text style={{ color: 'red' }}>Hi Username</Text >
				// </Grid>
				//<Image source={logo} style={{height: 386 / 4 }} />
		return (
				<Container>
					<Content>
							<Header style={{ height: 200 }}>
								<Body style={{ alignItems: "center" }}>
									<Icon name="flash" style={{ fontSize: 104 }} />
									<Title>Common Room</Title>
									<View padder>
										<Text />
									</View>
								</Body>
							</Header>
						<Form onSubmit={this.login}>
							<Field name="username" type="text" component={this.renderInput} label="Username" validate={[ required, maxLength15 ]}/>
							<Field name="password" type="password" component={this.renderInput} label="Password" validate={[ required, minLength8, maxLength15 ]} />
							<View padder>
								<Button block onPress={() => this.login()} >
									<Text>Login</Text>
								</Button>
								<Button block transparent onPress={() => this.handleRegister()}>
                	<Text>Forgot Password</Text>
                </Button>
							</View>
						</Form>
				</Content>
			</Container>
		);
	}

	login() {
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


const LoginContainer = reduxForm({
	form: "login",
  // initialValues: {
  //   country: 'Brazil'
	//
})(LoginForm);
export default LoginContainer;
