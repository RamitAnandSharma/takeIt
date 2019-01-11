import React, {Component} from 'react';
import { Platform, StyleSheet, Text, Button, TextInput, PixelRatio, Image, Animated, KeyboardAvoidingView, TouchableNativeFeedback, TouchableOpacity, ImageBackground} from 'react-native';
import { View, FlatList, ListView , ActivityIndicator } from 'react-native';
import { List, ListItem, SearchBar, Rating } from 'react-native-elements';
import PropTypes from 'prop-types';

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
		return (
			<View style={[styles.container, this.props.containerStyle]}>
          <View style={styles.cardContainer}>
            {this.renderContactHeader()}
          </View>
        </View>
    );
	}
}

var styles = StyleSheet.create({
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
  container: {
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
