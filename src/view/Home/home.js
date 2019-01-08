import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Container, Header, Title, Left, List, ListItem, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { DrawerActions } from 'react-navigation-drawer';
import { profile } from './../../store/actions/home'

export interface Props {
	status: any;
	navigation: any;
}
export interface State {}

 class Home extends Component <Props, State> {
    componentWillMount() {
			this.props.profile();
      console.warn("initail state",this.props.status)
    }

    test() {
        console.warn("after calling action",this.props.status)
    }

    render() {
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
								<Title>Home</Title>
							</Body>
							<Right />
						</Header>
						 <Content padder>
			          <List>
			            <ListItem>
			              <Text  onPress={() => this.test()}>Simon Mignolet ss</Text>
			            </ListItem>
			            <ListItem>
			              <Text>Nathaniel Clynesss</Text>
			            </ListItem>
			            <ListItem>
			              <Text>Dejan Lovren</Text>
			            </ListItem>
			          </List>
			        </Content>
					 </Container>
        );
    }
}

const mapStateToProps = state => ({
  status: state
})
 
const mapDispatchToProps = dispatch => ({
    profile: () => dispatch(profile())
})
 
const HomeContainer = connect(mapStateToProps,  mapDispatchToProps)(Home)

export default HomeContainer;
