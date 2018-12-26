import React, {Component} from "react";
import Home from "./../../views/Home";

export interface Props {
	navigation: any;
}
export interface State {}
export default class HomeContainer extends Component<Props, State> {

	render() {
		return <Home navigation={this.props.navigation} />;
	}
}
