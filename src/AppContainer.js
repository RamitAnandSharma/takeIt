import React, {Component} from "react";
import { createAppContainer, createDrawerNavigator } from "react-navigation";
import { Dimensions } from "react-native";
import { Root } from "native-base";

const deviceWidth = Dimensions.get("window").width;
//import Login from "./view/Login";
import Sidebar from "./view/Sidebar";
import HomeContainer from "./view/Home";
import HistoryContainer from "./view/History";
import Start from "./view/Start";
import Login from "./container/LoginContainer/LoginForm";
//import Login from "./view/Login";

import SettingsContainer from "./view/Settings";
//import SidebarContainer from "./container/SidebarContainer";

const AppDrawerNavigator = createDrawerNavigator(
	{

		Login: { screen: Login },
		Start: { screen: Start },
		Home: { screen: HomeContainer },
		Settings: { screen: SettingsContainer  },
		History: { screen: HistoryContainer  }
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
