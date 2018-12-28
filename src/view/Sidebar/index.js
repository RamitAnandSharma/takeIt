import React, {Component} from "react";
import { Text, Container, List, ListItem, Content } from "native-base";
import { NavigationActions } from "react-navigation";

const routes = [
	{
		route: "Home",
		caption: "Home",
	},
	{
		route: "History",
		caption: "History",
	},
	{
		route: "Login",
		caption: "Logout",
	},
	{
		route: "Login",
		caption: "Login",
	},
];

export interface Props {
	navigation: any;
}
export interface State {}
// const resetAction = NavigationActions.reset({
// 	index: 0,
// 	actions: [NavigationActions.navigate({ routeName: "History" })],
// });
export default class Sidebar extends Component<Props, State> {
	render() {
		return (
			<Container>
				<Content>
					<List
						style={{ marginTop: 40 }}
						dataArray={routes}
						renderRow={data => {
							return (
								<ListItem button onPress={() => this.props.navigation.navigate(data.route) } >
									<Text>{data.caption}</Text>
								</ListItem>
							);
						}}
					/>
				</Content>
			</Container>
		);
	}
}
