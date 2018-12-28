import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Left, Right, Icon, Button, Body, Content,Text, Spinner} from "native-base";

import { fetchOrders } from './../../store/actions/home'
import { OrderItem } from './ordercard'
import Dataset  from 'impagination';

export interface Props {
	status: any;
	navigation: any;
}

export interface State {
  isLoading: true,
	items : [
		{ orderId:'02', title:'Native Base', deliverDate:'26/12/2018 16:00', deliverStatus:'Success', description:'NativeBase is a free and open source framework that enable developers to build', orderStatus:'Success', orderDate:'Success', amount:'Rs 500'	},
		{ orderId:'02', title:'Native Base', deliverDate:'26/12/2018 16:00', deliverStatus:'Success', description:'NativeBase is a free and open source framework that enable developers to build', orderStatus:'Success', orderDate:'Success', amount:'Rs 1200'	}
	]

}

 class History extends Component{
    componentWillMount() {
			//this.props.fetchOrders();
      console.log("initail state",this.props.payload);
    }

    test() {
        console.log("after calling action",this.props.payload);
    }

	renderItems() {
		var items = [
			{ orderId:'01', title:'Native Base 1', deliverDate:'26/12/2018 16:00', deliverStatus:'Success', description:'NativeBase is a free and open source framework that enable developers to build', orderStatus:'Success', orderDate:'26/12/2018', amount:'Rs 100'	},
			{ orderId:'02', title:'Native Base 2', deliverDate:'26/12/2018 16:00', deliverStatus:'Success', description:'NativeBase is a free and open source framework that enable developers to build', orderStatus:'Success', orderDate:'26/12/2018', amount:'Rs 400'},
			{ orderId:'03', title:'Native Base 3', deliverDate:'26/12/2018 16:00', deliverStatus:'Success', description:'NativeBase is a free and open source framework that enable developers to build', orderStatus:'Success', orderDate:'26/12/2018', amount:'Rs 800'	},
			{ orderId:'04', title:'Native Base 4', deliverDate:'26/12/2018 16:00', deliverStatus:'Success', description:'NativeBase is a free and open source framework that enable developers to build', orderStatus:'Success', orderDate:'26/12/2018', amount:'Rs 1200'	}

		]
		return (items.map((record, index) => {

				if(record.isPending && !record.isSettled) {
	        return <Spinner color="#00C497" key={Math.random()}/>;
	      }
				return (	<OrderItem item={record} key={item.orderId} />);
			}));
		}



		/**
	    * Based on scroll position determine which card is in the current
	    * viewport. From there you can set the impagination readOffset
	    * equal to the current visibile card.
	    *
	    * @method setCurrentReadOffset
	    */
	   setCurrentReadOffset = (event) => {
	     let itemHeight = 402;
	     let currentOffset = Math.floor(event.nativeEvent.contentOffset.y);
	     let currentItemIndex = Math.ceil(currentOffset / itemHeight);

	     this.state.dataset.setReadOffset(currentItemIndex);
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
							<Body><Title>History</Title></Body>
							<Right />
						</Header>
						<Content scrollEventThrottle={300} onScroll={this.setCurrentReadOffset} removeClippedSubviews={true}>
							{this.renderItems()}
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
