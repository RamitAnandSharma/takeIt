import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Left, Right, List, ListItem, Icon, Button, Body, Content,Text, Card, CardItem, Spinner } from "native-base";
//import { DrawerActions } from 'react-navigation-drawer';
import { fetchOrders } from './../../store/actions/home'

export interface Props {
	status: any;
	navigation: any;
}

export interface State {
  isLoading: true,
	items : [
		{ orderId:'02', title:'Native Base', deliverDate:'26/12/2018 16:00', deliverStatus:'Success', description:'NativeBase is a free and open source framework that enable developers to build', orderStatus:'Success', orderDate:'Success', amount:'Rs 500'	},
		{ orderId:'02', title:'Native Base', deliverDate:'26/12/2018 16:00', deliverStatus:'Success', description:'NativeBase is a free and open source framework that enable developers to build', orderStatus:'Success', orderDate:'Success', amount:'Rs 1200'	}
	],
	scrollY: new Animated.Value(0),

}

 class History extends Component <Props, State> {
    componentWillMount() {
			this.props.fetchOrders();
      console.log("initail state",this.props.payload);
    }

    test() {
        console.log("after calling action",this.props.payload);
    }

	renderOrders() {
		var items = [
			{ orderId:'01', title:'Native Base 1', deliverDate:'26/12/2018 16:00', deliverStatus:'Success', description:'NativeBase is a free and open source framework that enable developers to build', orderStatus:'Success', orderDate:'26/12/2018', amount:'Rs 100'	},
			{ orderId:'02', title:'Native Base 2', deliverDate:'26/12/2018 16:00', deliverStatus:'Success', description:'NativeBase is a free and open source framework that enable developers to build', orderStatus:'Success', orderDate:'26/12/2018', amount:'Rs 400'},
			{ orderId:'03', title:'Native Base 3', deliverDate:'26/12/2018 16:00', deliverStatus:'Success', description:'NativeBase is a free and open source framework that enable developers to build', orderStatus:'Success', orderDate:'26/12/2018', amount:'Rs 800'	},
			{ orderId:'04', title:'Native Base 4', deliverDate:'26/12/2018 16:00', deliverStatus:'Success', description:'NativeBase is a free and open source framework that enable developers to build', orderStatus:'Success', orderDate:'26/12/2018', amount:'Rs 1200'	}

		]
		return (items.map((item, index) => {
			 return(
				 <Card key={index}>
						<CardItem header bordered>
							<Body>
								<Text onPress={() => this.test()}>{item.title}1</Text>
							</Body>
							<Right>
								<Text>{item.deliverDate}</Text>
								<Text note primary>{item.deliverStatus}</Text>
							</Right>
						</CardItem>
					 <CardItem bordered>
						 <Body>
							 <Text>{item.description}</Text>
						 </Body>
					 </CardItem>
					 <CardItem footer bordered>
							<Left>
								<Text note>{item.orderStatus}</Text>
							</Left>
							<Body>
								<Text note>{item.orderDate}</Text>
							</Body>
							<Right>
								<Text>{item.amount}</Text>
							</Right>
					 </CardItem>
				 </Card>
			 );
		 })
		);
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
								<Title>History</Title>
							</Body>
							<Right />
						</Header>
						<Content padder>
							{this.renderOrders()}
			       </Content>
					 </Container>
        );
    }
}

const mapStateToProps = state => ({
  payload: state
})
 
const mapDispatchToProps = dispatch => ({
    fetchOrders: () => dispatch(fetchOrders())
})
 
const HistoryContainer = connect(mapStateToProps,  mapDispatchToProps)(History)

export default HistoryContainer;
