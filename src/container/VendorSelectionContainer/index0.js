import React, {Component} from 'react';
import { Platform, StyleSheet, View, Text, Button, TextInput, Image, Animated, KeyboardAvoidingView, TouchableNativeFeedback, TouchableOpacity, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { fetchOrders } from './../../store/actions/home';
import VendorSelect from "./VendorSelect";

import Dimensions from 'Dimensions';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export interface Props {
	status: any;
	navigation: any;
}
export interface State {
  isLoading: true,
	items : any
}

class SelectionContainer extends Component<Props, State> {
	componentWillMount() {
    console.log(this);
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
		];
		return items.map(record => {
				return ( <VendorSelect item={record} key={record.orderId} />);
			});
		}

	render() {
		return ( <Text>aSAs</Text> );
	}
}

const mapStateToProps = state => ({
payload: state
});

const mapDispatchToProps = dispatch => ({
	fetchOrders: () => dispatch(fetchOrders())
});

const VendorSelectionContainer = connect(mapStateToProps,  mapDispatchToProps)(SelectionContainer);

export default VendorSelectionContainer;
