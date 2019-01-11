import React, {Component} from 'react';
import { Platform, StyleSheet, Text, Button, TextInput, Image, Animated, KeyboardAvoidingView, TouchableNativeFeedback, TouchableOpacity, ImageBackground} from 'react-native';
import { View, FlatList, ListView , ActivityIndicator } from 'react-native';
import { List, ListItem, SearchBar, Rating } from 'react-native-elements';
import PropTypes from 'prop-types';

import { Icon } from 'react-native-elements';
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
       <View style={styles.headerContainer}>
         <View style={styles.userRow}>
           <Image style={styles.userImage} source={{uri: picture.large}} />
         </View>
				 <View style={styles.userBioRow}>
					 <Text style={styles.userBioText}>xx{this.state.vendor.store}</Text>
				 </View>
				<View style={styles.cardContainer}>
					<List>
						<ListItem title={this.state.vendor.store}/>
						<FlatList data={list} renderItem={this.renderRow} keyExtractor={item => item.name} />
					</List>
				</View>

         <View style={styles.socialRow}>
           <View>
             <Icon
               size={30}
               type="entypo"
               color="#3B5A98"
               name="facebook-with-circle"
               onPress={() => console.log('facebook')}
             />
           </View>
           <View style={styles.socialIcon}>
             <Icon
               size={30}
               type="entypo"
               color="#56ACEE"
               name="twitter-with-circle"
               onPress={() => console.log('twitter')}
             />
           </View>
           <View>
             <Icon
               size={30}
               type="entypo"
               color="#DD4C39"
               name="google--with-circle"
               onPress={() => console.log('google')}
             />
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

const styles = StyleSheet.create({
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
