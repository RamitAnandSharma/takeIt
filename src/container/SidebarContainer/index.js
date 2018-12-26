import React, {Component} from "react";
import Sidebar from "./../../view/Sidebar";

export interface Props {
	navigation: any;
}
export interface State {}
export default class SidebarContainer  extends Component<Props, State> {
	render() {
		return <Sidebar navigation={this.props.navigation} />;
	}
}
