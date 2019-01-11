// import { Sidebar } from "./sidebar";
// export { Sidebar };

import React, {Component} from "react";
import { Image, StatusBar } from "react-native";
import { Content, Text, List, ListItem, Icon, Container, Left, Right, Badge } from "native-base";
import { NavigationActions } from "react-navigation";

import styles from "./style";

const routes = [
	{
		name: "Vselect",
		route: "Vselect",
		icon: "albums",
		bg: "#C5F442"
	},{
		name: "Start",
		route: "Start",
		icon: "albums",
		bg: "#C5F442"
	},
	{
		name: "Home",
		route: "Home",
		icon: "albums",
    bg: "#C5F442"
	},
	{
		name: "History",
		route: "History",
		icon: "albums",
    bg: "#477EEA",
    types: "6"
	},
	{
		name: "Logout",
		route: "Logout",
		icon: "albums",
    bg: "#C5F442",
	},
	{
		name: "Login",
		route: "Login",
	},
];

export interface Props {
	navigation: any;
}
export interface State {
	shadowOffsetWidth: 1,
	shadowRadius: 4
}
// const resetAction = NavigationActions.reset({
// 	index: 0,
// 	actions: [NavigationActions.navigate({ routeName: "History" })],
// });<Image square style={styles.drawerImage} source={drawerImage} />

const drawerCover = require("../../../assets/drawer-cover.png");

export default class Sidebar extends Component<Props, State> {

	render() {
		return (
			<Container>
				<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }} >
					<Image source={drawerCover} style={styles.drawerCover} />
					<List dataArray={routes} renderRow= { data =>
						<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)} >
							<Left>
								<Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
								<Text style={styles.text}>{data.name}</Text>
							</Left>
							{data.types &&
								<Right style={{ flex: 1 }}>
									<Badge style={{ borderRadius: 3, height: 25, width: 72, backgroundColor: data.bg }} >
										<Text style={styles.badgeText}>{`${data.types} Types`}</Text>
									</Badge>
								</Right>
							}
						</ListItem>
					}/>
				</Content>
			</Container>
		);
	}
}
