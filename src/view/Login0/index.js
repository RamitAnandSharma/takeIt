import React, {Component} from 'react';
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from "native-base";
//import styles from "./styles";
export interface Props {
	loginForm: any;
	onLogin: Function;
}
export interface State {}
export default class Login extends  Component<Props, State> {
	render() {
		console.log('Hi userr');
		debugger
		return (
			<Container>
				<Header style={{ height: 200 }}>
					<Body style={{ alignItems: "center" }}>
						<Icon name="flash" style={{ fontSize: 104 }} />
						<Title>Common Room</Title>
						<View padder>
							<Text />
						</View>
					</Body>
				</Header>
				<Content>
					<Form >
							{this.props.loginForm}
						<View padder>
							<Button block onPress={() => this.props.onLogin()}>
								<Text>Login</Text>
							</Button>
						</View>
					</Form>
			</Content>
		</Container>
		);
	}
}

// Login;
