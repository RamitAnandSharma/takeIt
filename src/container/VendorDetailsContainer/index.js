import React, {Component} from 'react';
import { Platform, StyleSheet, Text, Button, TextInput, PixelRatio, Image, TouchableHighlight, KeyboardAvoidingView, TouchableNativeFeedback, TouchableOpacity, ImageBackground, View, TouchableWithoutFeedback, ScrollView,  Share, Animated,  FlatList, ListView , ActivityIndicator } from 'react-native';

import { List, ListItem, SearchBar, Rating } from 'react-native-elements';
import PropTypes from 'prop-types';

import TextGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import Dimensions from 'Dimensions';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const {width, height} = Dimensions.get('window');
export interface Props {
	status: any;
	navigation: any;
}
export interface State {
  isLoading: true,
	items : any
}

class VendorDetailsContainer extends Component {


	// static propTypes = {
  //   uuid: PropTypes.string.isRequired,
  //   store: PropTypes.string.isRequired,
  //   rating: PropTypes.number.isRequired,
  //   customercount: PropTypes.number.isRequired,
	// 	contact: PropTypes.shape({
	// 		phone: PropTypes.string,
	// 		cell: PropTypes.string,
	// 		email: PropTypes.string,
	// 	}),
	// 	registered: PropTypes.shape({
	// 		date: PropTypes.string.isRequired,
	// 	}),
	// 	location: PropTypes.shape({
	// 		street: PropTypes.string.isRequired,
	// 		city: PropTypes.string.isRequired,
	// 		state: PropTypes.string.isRequired,
	// 		postcode: PropTypes.number.isRequired,
	// 		coordinates: PropTypes.shape({
	// 			latitude: PropTypes.string,
	// 			longitude: PropTypes.string,
	// 		}),
	// 		timezone: PropTypes.shape({
	// 			offset: PropTypes.string.isRequired,
	// 			description: PropTypes.string.isRequired,
	// 		}),
	// 	}),
	// 	users: PropTypes.arrayOf(
  //     PropTypes.shape({
	// 			uuid: PropTypes.string.isRequired,
  //       age: PropTypes.number.isRequired,
  //       dob: PropTypes.string.isRequired,
  //       username: PropTypes.string.isRequired,
  //       name: PropTypes.shape({
  //         first: PropTypes.string.isRequired,
  //         last: PropTypes.string.isRequired,
  //         avatar: PropTypes.string.isRequired
  //       }),
	//     }).isRequired,
	// 	),
	// 	picture: PropTypes.shape({
	// 		large: PropTypes.string.isRequired,
	// 		medium: PropTypes.string.isRequired,
	// 		thumbnail: PropTypes.string.isRequired,
	// 	}),
	//  }



	constructor(props) {
    super(props);
		console.log(props.navigation.state.params)
    this.state = {
			prevScreenTitle: props.navigation.state.params.prevScreenTitle,
      vendor: props.navigation.state.params.vendor,
			measuresTitle: 0,
      measuresSeason: 0,
      scrollY: new Animated.Value(0),
      currentSeason: 1
    };
  }

	// <View style={styles.userNameRow}>
	//   <Text style={styles.userNameText}>{store}</Text>
	// </View>
	// <View style={styles.userBioRow}>
	//   <Text style={styles.userBioText}>{store}</Text>
	// </View>



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

	renderContactHeader = () => {
		const list = [
		{ name: 'Amy Farha',  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg', subtitle: 'Vice President' },
		{ name: 'Chris Jackson', avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg', subtitle: 'Vice Chairman' },
	];
		console.log(this.state.vendor);
     const { picture, store} = this.state.vendor
     return (

      <View style={styles.mainSection}>
				<View style={styles.shotDetailsRow}>
					<View style={styles.shotCounter}>
						<Icon name="heart-o" size={24} color="#333"/>
						<Text style={styles.shotCounterText}> qeqwe</Text>
					</View>
					<View style={styles.shotCounter}>
						<Icon name="comments-o" size={24} color="#333"/>
						<Text style={styles.shotCounterText}>qweqwe </Text>
					</View>
					<View style={styles.shotCounter}>
						<Icon name="eye" size={24} color="#333"/>
						<Text style={styles.shotCounterText}> AS</Text>
					</View>
				</View>
			</View>
     )
   }



	render() {

    const {goBack} = this.props.navigation;
		const {params} = this.props.navigation.state;
		const {navigate} = this.props.navigation;
		//const {vendor} = params
		//const {episodes} = params.item.details
		//const {name} = params.item    props.navigation.state.params.vendor
		//const {thumbnail, cast, description, year, creator, numOfEpisodes, season} = params.item.details
		const {store, rating, customercount, picture} = params.vendor;
		const headerNameToggle = this.state.scrollY.interpolate({
        inputRange : [store, store + 1],
        outputRange: [0, 1]
    })

		// return (
		// 	<View style={[styles.container]}>
		// 	<TouchableHighlight style={styles.closeButton} onPress={() => goBack()}>
		// 		<Icon name="close" size={18}/>
    //   </TouchableHighlight>
		//
    //   <Animated.View style={[styles.header, {opacity: headerNameToggle}]}>
    //       <Text style={styles.headerText}>{store}</Text>
    //   </Animated.View>
    //   </View>
    // );
		return (
			<ScrollView  style={styles.container}>
				<Image style={styles.thumbnail} source={{uri:picture.thumbnail}} >

				</Image>
				<View style={styles.descriptionContainer}>
					<View style={styles.subtitle}>
						<Text style={[styles.text, styles.subTitleText]}>{store}</Text>
						<Text style={[styles.text, styles.subTitleText]}>{store}</Text>
						<Text style={[styles.text, styles.subTitleText]}>{store}</Text>
					</View>
					<View style={styles.shareListIcons}>
            <View style={styles.myListIcon}>
                <Icon style={styles.listIcon} name="person" color="grey" size={25} />
                <Text style={styles.text}>My List</Text>
            </View>
 
					<View style={styles.myListIcon}>
							<Icon style={styles.listIcon} name="person" color="grey" size={25} />
							<Text style={styles.text}>My List</Text>
					</View>
			</View>
				</View>
			</ScrollView>
		);
	}
}

var styles = StyleSheet.create({

	container: {
    flex: 1,
  },
	closeButton: {
        position: 'absolute',
        top: 15,
        right: 10,
        zIndex: 2
    },
		header: {
        backgroundColor: '#181818',
        paddingVertical: 10,
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1
    },
		headerText: {
				color: 'white',
				fontSize: 20
		},
		thumbnail: {
			width: width,
			height: 200
	},
    descriptionContainer: {
        paddingHorizontal: 20
    },
    subtitle: {
        flexDirection: 'row'
    },
    subTitleText: {
        marginRight: 20
    },
    text: {
        color: '#b3b3b3',
        fontSize: 16
    },
		shareListIcons: {
	 flexDirection: 'row',
	 marginVertical: 30
},
		listIcon: {
        height: 25
    },
    shareIcon: {
        height: 25
    },
    myListIcon: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40
    },
	});
var styles1 = StyleSheet.create({

	container: {
    flex: 1,
  },
	closeButton: {
        position: 'absolute',
        top: 15,
        right: 10,
        zIndex: 2
    },

  spinner: {
    marginTop: 20,
    width: 50
  },
  a: {
    fontWeight: "300",
    color: "#ea4c89"
  },
  p: {
    marginBottom: 0,
    flexDirection: "row",
    marginTop: 0,
  },
  invisibleView: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right:0
  },
  customModalImage: {
    height: height / 2
  },
  headerContent: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 40,
    alignItems: "center",
    width: width,
    backgroundColor: "#fff"
  },
  shotTitle: {
    fontSize: 16,
    fontWeight: "400",
    color: "#ea4c89",
    lineHeight: 18
  },
  playerContent: {
    fontSize: 12
  },
  player: {
    fontWeight: "900",
    lineHeight: 18
  },
  playerAvatar: {
    borderRadius: 40,
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 60,
    left: width / 2 - 40,
    borderWidth: 2,
    borderColor: "#fff"
  },
  rightPane: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  shotDetailsRow: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection: "row"
  },
  shotCounter: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-between"
  },
  shotCounterText: {
    color: "#333"
  },
  mainSection: {
    flex: 1,
    alignItems: "stretch",
    padding: 10,
    backgroundColor: "white"
  },
  separator: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    height: 1 / PixelRatio.get(),
    marginVertical: 10,
  },
  sectionSpacing: {
    marginTop: 20
  },
  heading: {
    fontWeight: "700",
    fontSize: 16
  },

  cardContainer: {
    flex: 1,
  },

  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 10,
    marginTop: 45,
  },
  indicatorTab: {
    backgroundColor: 'transparent',
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  sceneContainer: {
    marginTop: 10,
  },
  socialIcon: {
    marginLeft: 14,
    marginRight: 14,
  },
  socialRow: {
    flexDirection: 'row',
  },
  tabBar: {
    backgroundColor: '#EEE',
  },
  tabContainer: {
    flex: 1,
    marginBottom: 12,
  },
  tabLabelNumber: {
    color: 'gray',
    fontSize: 12.5,
    textAlign: 'center',
  },
  tabLabelText: {
    color: 'black',
    fontSize: 22.5,
    fontWeight: '600',
    textAlign: 'center',
  },
  userBioRow: {
    marginLeft: 40,
    marginRight: 40,
  },
  userBioText: {
    color: 'gray',
    fontSize: 13.5,
    textAlign: 'center',
  },
  userImage: {
    borderRadius: 60,
    height: 80,
    marginBottom: 10,
    width: 80,
  },
  userNameRow: {
    marginBottom: 10,
  },
  userNameText: {
    color: '#5B5A5A',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userRow: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 12,
  },
})


// VendorDetailsContainer.propTypes = {
//   navigation: PropTypes.object.isRequired,
// }

export default VendorDetailsContainer;
