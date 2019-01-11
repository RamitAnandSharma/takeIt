import React, {Component} from "react";
import { createAppContainer, createDrawerNavigator, createStackNavigator } from "react-navigation";
import { HeaderBackButton } from 'react-navigation';

import { Dimensions, YellowBox } from "react-native";
import { Root } from "native-base";

const deviceWidth = Dimensions.get("window").width;

import Sidebar from "./view/Sidebar";
import HomeContainer from "./view/Home";
import HistoryContainer from "./view/History";
import Start from "./view/Start";
import Login from "./container/LoginContainer/LoginForm";
import VendorSelectionContainer from "./container/VendorSelectionContainer";
import VendorDetailsContainer from "./container/VendorDetailsContainer";
import SettingsContainer from "./view/Settings";

import MyVendorsContainer from "./container/MyVendorsContainer";


const navigationOptions = ({ navigation }) => ({
    headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
})

const AppStackNavigator = createStackNavigator({
	  DetailView: { screen: VendorDetailsContainer,
	    // Optional: Override the `navigationOptions` for the screen
	    // navigationOptions: ({ navigation }) => ({
			// 	 title: `${navigation.state.params.name} Profile`,
			// 	 headerLeft: () =>  <HeaderBackButton onPress={() => navigation.goBack(null)} />
			//  }),
	  },
	},
  {
    mode: 'modal',
    headerMode: 'none',
    // defaultNavigationOptions: {
    //   gesturesEnabled: false,
    // },
  }
);

const AppDrawerNavigator = createDrawerNavigator(
	{

    MyVendorsView: { screen: MyVendorsContainer },
		VSelect: { screen: VendorSelectionContainer },
		Login: { screen: Login },
		Start: { screen: Start },
		Home: { screen: HomeContainer },
		Settings: { screen: SettingsContainer  },
		History: { screen: HistoryContainer  },
		AppStackNavigator: AppStackNavigator
	},
	{ contentComponent: (props: any) => <Sidebar {...props} />, }
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
YellowBox.ignoreWarnings(
      ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
]);
