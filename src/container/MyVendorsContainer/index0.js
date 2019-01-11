import React, {Component} from 'react';
import { Platform, StyleSheet, Text, Button, TextInput, PixelRatio, Image, TouchableHighlight, KeyboardAvoidingView, TouchableNativeFeedback, TouchableOpacity, ImageBackground, View, TouchableWithoutFeedback, ScrollView,  Share, Animated,  FlatList, ListView , ActivityIndicator } from 'react-native';
import { List, ListItem, Avatar, SearchBar, Rating, Header } from 'react-native-elements';
import PropTypes from 'prop-types';
import TextGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import { StatusBar } from 'react-native';
import GridView from 'react-native-super-grid';
import Dimensions from 'Dimensions';
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


	renderRow ({ item }) {
	  return (
	    <ListItem
	      roundAvatar
	      title={item.name}
	      subtitle={item.subtitle}
	      avatar={{uri:item.avatar_url}}
	    />
	  )
	}

	static navigationOptions = {
	  headerVisible: false
	}
//outerContainerStyles={{ borderBottomColor:'#85106a',borderBottomWidth:1 }}
//
//
renderGridItem( {item} ){
	console.log(item);
    return (<TouchableOpacity style={[{borderRadius: 10, borderWidth: 1.5, borderColor: 'blue'}, styles.gridItem]}>
        <View style={[styles.gridItemImage, {justifyContent:"center", alignItems:"center"}]}>
						<Avatar
						  large rounded
						  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
						  onPress={() => console.log("Works!")}
						  activeOpacity={0.7}
						/>
        </View>
				<Text style={{fontSize:12}}>
					{item.storeName}
				</Text>
        <Text style={styles.gridItemText}>{item.id}</Text>
    </TouchableOpacity>
    );
}

	render() {
    const {goBack} = this.props.navigation;
		const {params} = this.props.navigation.state;
		const {navigate} = this.props.navigation;
		var listItems = [
			{storeName:"name1", id:"name", thumbnail: { uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }},
		  {storeName:"name2", id:"2", thumbnail: { uri:  "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
	 ];
		return (
			<ScrollView  style={styles.container}>
			<MyStatusBar backgroundColor="#3D6DCC" barStyle="light-content" />
			<Header
				containerStyle={{backgroundColor: '#3D6DCC'}}
				leftComponent={{ icon: 'menu', color: '#fff'}}
				rightComponent={<Avatar
                small
                rounded
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
            />}
				centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
				outerContainerStyles={{ height: Platform.OS === 'ios' ? 70 :  70 - 24,}}
				innerContainerStyles={{ alignItems:'center' }}
			/>
			<FlatList data={listItems} keyExtractor={(item, index) => item.id}     //has to be unique
			renderItem={(item) => this.renderGridItem(item)} //method to render the data in the way you want using styling u need
			numColumns={2}/>
			</ScrollView>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	grid: {
	    justifyContent: 'center',
	    flexDirection: 'row',
	    flexWrap: 'wrap',
	    flex: 1,
	},
	gridItem: {
	    margin:5,
			width: Dimensions.get('window').width / 2.2, //Device width divided in almost a half
	    height: 150,
	    justifyContent: 'center',
	    alignItems: 'center',
	},
	gridItemImage: {
	    width: 100,
	    height: 100,
	    //borderWidth: 1.5,
	    //borderColor: 'blue',//'white',
	    //borderRadius: 10,
	},
	gridItemText: {
	    marginTop: 5,
	    textAlign:'center',
	},
});

export default MyVendorsContainer;
