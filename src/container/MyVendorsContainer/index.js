import React, {Component} from 'react';
import { Platform, StyleSheet, Text, Button, TextInput, PixelRatio, Image, TouchableHighlight, KeyboardAvoidingView, TouchableNativeFeedback, TouchableOpacity, ImageBackground, View, TouchableWithoutFeedback, ScrollView,  Share, Animated,  FlatList, ListView , ActivityIndicator } from 'react-native';
import { List, ListItem, Avatar, SearchBar, Rating, Header } from 'react-native-elements';
import PropTypes from 'prop-types';
import TextGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import { StatusBar } from 'react-native';
import GridView from 'react-native-super-grid';
import Dimensions from 'Dimensions';

import userIcon from "./../../../assets/images/user1.png";


const {width, height} = Dimensions.get('window');

export interface Props {
	status: any;
	navigation: any;
}
export interface State {
  isLoading: true,
	items : any
}

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[{backgroundColor:backgroundColor, height: APPBAR_HEIGHT,}, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 20:  StatusBar.currentHeight;

class MyVendorsContainer extends Component {

	constructor(props) {
    super(props);
		console.log(props.navigation.state.params)
    this.state = {
			//prevScreenTitle: props.navigation.state.params.prevScreenTitle,
      scrollY: new Animated.Value(0),
    };
  }

	static navigationOptions = {
	  headerVisible: false
	}

	render() {
    const {goBack} = this.props.navigation;
		const {params} = this.props.navigation.state;
		const {navigate} = this.props.navigation;

		var listItems = [
			{storeName:"Aggarwal Provision Store", id:1, imageTag: "IMAGE_ONE", thumbnail: { uri: "./../../../assets/images/user1.png" }},
			{storeName:"Shreejee Super Mart", id:2, imageTag: "IMAGE_TWO", thumbnail: { uri:  "./../../../assets/images/user2.png"}},
			{storeName:"Armz Enterprises", id:3, imageTag: "IMAGE_THREE", thumbnail: { uri: "./../../../assets/images/user3.png" }},
			{storeName:"Jaideep Mega Store", id:4, imageTag: "IMAGE_FOUR", thumbnail: { uri:  "./../../../assets/images/user4.png"}},
			{storeName:"Modern Super Market", id:5, imageTag: "IMAGE_TWO", thumbnail: { uri:  "./../../../assets/images/user2.png"}},
			{storeName:"Jain Shudh Foods", id:6, imageTag: "IMAGE_THREE", thumbnail: { uri: "./../../../assets/images/user3.png" }},
			{storeName:"Jain Shudh Foods", id:7, imageTag: "IMAGE_FOUR", thumbnail: { uri:  "./../../../assets/images/user4.png"}}
	 ];
		 const IMAGES = {
 			IMAGE_ONE : require('./../../../assets/images/user1.png'),
 			IMAGE_TWO : require('./../../../assets/images/user2.png'),
 			IMAGE_THREE : require('./../../../assets/images/user3.png'),
 			IMAGE_FOUR : require('./../../../assets/images/user4.png'),
 			IMAGE_ELSE : require('./../../../assets/images/user4.png'),
 		}

		return (
			<View  style={styles.container}>
			<MyStatusBar backgroundColor="#1e63ea" barStyle="light-content" />
			<Header
				containerStyle={{backgroundColor: '#3D6DCC'}} activeOpacity={0.7}
				centerComponent={{ text: 'My Vendors', style: { color: '#fff' } }}
				outerContainerStyles={{ height: Platform.OS === 'ios' ? 70 :  70 - 24,}}
				innerContainerStyles={{ alignItems:'center' }}
				leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.openDrawer()}}
				rightComponent={<Avatar small rounded source={userIcon} onPress={() => console.log("Works!")} />}
			/>
			<GridView
        itemDimension={130}
        items={listItems}
        style={styles.gridView}
        renderItem={item => (
          <View style={[styles.itemContainer]}>
					<Avatar large rounded source={IMAGES[item.imageTag]} onPress={() => console.log("Works!")} activeOpacity={0.7}
					/>
          <Text style={[styles.itemName]}>{item.storeName}</Text>
          </View>
        )}
      />
			<TouchableOpacity  onPress={() => console.log('hello')}  style={styles.TouchableOpacityStyle} >
				<Icon raised reverse name='plus' type='font-awesome' color='#3D6DCC' style={styles.FloatingButtonStyle}/>
      </TouchableOpacity>
			</View>
		);
	}
}

// <TouchableOpacity onPress={() => alert('FAB clicked')} style={styles.fab}>
//     <Text style={styles.fabIcon}>+</Text>
	//<Icon raised name='plus' type='font-awesome' color='#f50' style={styles.FloatingButtonStyle}/>
//   </TouchableOpacity>

var styles = StyleSheet.create({
	container: {
		flex: 1,

    justifyContent: 'center',
	},
	gridView: {
		paddingVertical: 10,
		flex: 1,
	},
	itemContainer: {
		justifyContent:'center',
		alignItems:'center',
		borderRadius: 10,
		padding: 10,
		elevation:1,
		shadowOffset: { width: 1, height: 1 },
		shadowColor: "grey",
		shadowOpacity: 0.5,
		shadowRadius: 10,
	},
	itemName: {
		fontSize: 16,
		fontWeight: '600',
		fontFamily: 'sans-serif-light'
	},
	itemCode: {
		fontWeight: '600',
		fontSize: 12,
	},
	TouchableOpacityStyle:{
	    position: 'absolute',
	    width: 50,
	    height: 50,
	    alignItems: 'center',
	    justifyContent: 'center',
	    right: 30,
	    bottom: 30,
	  },
	  FloatingButtonStyle: {
	    resizeMode: 'contain',
	    width: 50,
	    height: 50,
	  }
});

export default MyVendorsContainer;
