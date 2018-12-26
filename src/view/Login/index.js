import React, {Component} from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { DrawerActions } from 'react-navigation-drawer';


export interface Props {
	navigation: any;
}
export interface State {}

class Login extends Component<Props, State> {
	render() {
  //  const navigation = this.props.navigation;
		const {navigate} =this.props.navigation;
		return (
			<Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home ZxZX Screen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Chat")}>
            <Text>Chat With People</Text>
          </Button>
          <Button full rounded primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Profile")}>
            <Text>Goto Profiles</Text>
          </Button>
        </Content>
      </Container>
		);
	}
}

export default Login;
