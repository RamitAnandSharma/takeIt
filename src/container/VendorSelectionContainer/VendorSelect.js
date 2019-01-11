import React, {Component} from 'react';
import { Platform, StyleSheet, View, Text, Button, TextInput, Image, Animated, KeyboardAvoidingView, TouchableNativeFeedback, TouchableOpacity, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import Dimensions from 'Dimensions';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export interface Props {
	navigation: any;
}
export interface State {}
export default class VendorSelect extends Component<Props, State> {

	render() {
		return <Text>aSAs</Text>;
	}
}
