import React, {Component} from "react";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import { Dimensions } from "react-native";
import { Root } from "native-base";

const deviceWidth = Dimensions.get("window").width;
//import Login from "@views/Login";
import Sidebar from "./view/Sidebar";
import HomeContainer  from "./view/Home";
import SidebarContainer from "./container/SidebarContainer";
//import History from "@views/History";

const AppDrawerNavigator = createDrawerNavigator(
	{
		Login: { screen: HomeContainer },
  	Home: { screen: HomeContainer },
  	History: { screen: HomeContainer },
	},
	{
		contentComponent: (props: any) => <Sidebar {...props} />,
  }
);

const AppNavigatorContainer =  createAppContainer(AppDrawerNavigator);

export default class AppContainer extends Component {
  render() {
    return (
      <Root>
				<AppNavigatorContainer />
			</Root>
    );
  }
}
