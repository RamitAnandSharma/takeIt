import React, {Component} from 'react';
import { Platform, StyleSheet, Text, Button, TextInput, Image, Animated, KeyboardAvoidingView, TouchableNativeFeedback, TouchableOpacity, ImageBackground} from 'react-native';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { List, ListItem, SearchBar, Rating } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { fetchOrders } from './../../store/actions/home';
import VendorSelect from "./VendorSelect";

import Dimensions from 'Dimensions';
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export interface Props {
	status: any;
	navigation: any;
}
export interface State {
  isLoading: true,
	items : any
}

class SelectionContainer extends Component {
	constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
		this.arrayholder = [];
  }

	static navigationOptions = {
     title: 'Main Screen',
   };

	componentWillMount() {
    this.makeRemoteRequest();
  }

	renderVendorDetails = item => {
		const { navigate } = this.props.navigation; 
		navigate("DetailView", {prevScreenTitle: 'Main Screen', name: item.store, vendor: item});
	};

	makeRemoteRequest = () => {
		const { page, seed } = this.state;
		this.setState({ loading: true });
		var vendors = [
					{ "uuid":"0056754f", "store":"Nagesh Store", "rating": 4, "customercount":200,
						"contact": { "phone":"(59) 2493-4021", "cell":"(74) 5680-9133", "email":"0056754f@example.com",
						},
						"registered":{ "date":"2005-11-24T04:59:11Z" },
						"location":{ "street":"4847 rua duque de caxias ", "city":"banglore", "state":"karnataka", "postcode":560008, "coordinates":{ "latitude":"-74.2190", "longitude":"56.4270" },
							"timezone":{ "offset":"-1:00", "description":"banglore India" }
						},
						"users": [
							{ "name":{ "first":"Nagesh", "last":"T" }, "uuid":"0056754f-1", "username":"Nagesh123", "password":"dome", "dob":"1976-08-15T22:32:12Z", "age":42 }
						],
						"picture": {
							"large":"https://randomuser.me/api/portraits/men/28.jpg", "medium":"https://randomuser.me/api/portraits/med/men/28.jpg", "thumbnail":"https://randomuser.me/api/portraits/thumb/men/28.jpg"
						}
				},
				{ "uuid":"0056754g", "store":"Prakash Store", "rating": 4, "customercount":400,
					"contact": { "phone":"(59) 2493-4021", "cell":"(74) 5680-9133", "email":"0056754g@example.com",
					},
					"registered":{ "date":"2005-11-24T04:59:11Z" },
					"location":{ "street":"4847 rua duque de caxias ", "city":"banglore", "state":"karnataka", "postcode":560008, "coordinates":{ "latitude":"-74.2190", "longitude":"56.4270" },
						"timezone":{ "offset":"-1:00", "description":"banglore India" }
					},
					"users": [
						{ "name":{ "first":"Prakash", "last":"T" }, "uuid":"0056754g-1", "username":"Prakash123", "password":"dome", "dob":"1976-08-15T22:32:12Z", "age":42 }
					],
					"picture": {
						"large":"https://randomuser.me/api/portraits/men/28.jpg", "medium":"https://randomuser.me/api/portraits/med/men/28.jpg", "thumbnail":"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
					}
			},
		];

		this.setState({
			data: page === 1 ? vendors : [...this.state.data, ...vendors],
			error: null,//items.error || null,
			loading: false
		});
		this.arrayholder = vendors;
		// fetch(url)
		// 	.then(res => res.json())
		// 	.then(res => {
		//
		// 	})
		// 	.catch(error => {
		// 		this.setState({ error, loading: false });
		// 	});
};


		renderSeparator = () => {
	    return (
	      <View
	        style={{
	          height: 1,
	          width: '86%',
	          backgroundColor: '#CED0CE',
	          marginLeft: '14%',
	        }}
	      />
	    );
	  };

		searchFilterFunction = text => {
	    console.log(this.arrayholder);
	    const newData = this.arrayholder.filter(item => {
	      const itemData = `${item.store.toUpperCase()}`;
				// ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
	      const textData = text.toUpperCase();
	      return itemData.indexOf(textData) > -1;
	    });
	    this.setState({
	      data: newData,
	    });
	  };


		renderHeader = () => {
	    return (
	      <SearchBar
	        placeholder="Search..."
	        onChangeText={text => this.searchFilterFunction(text)}
          autoCorrect={false}
					lightTheme
					round
					showLoading
					containerStyle={{ margin: 0, padding: 0}}
					inputStyle={{ backgroundColor: 'white'}}
					cancelButtonTitle="text"
	      />
	    );
	  };

	render() {
		if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
		return (
			<View >
			<List containerStyle={{borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={`${item.store}`}
							subtitle={
			          <View style={styles.subtitleView}>
									<Rating readonly imageSize={10} startingValue={3.3} style={styles.rating}/>
			            <Text style={styles.customercount}>(24)</Text>
			            <Text style={{paddingLeft: 30}}>220</Text>
			          </View>
			        }
              avatar={{ uri: item.picture.thumbnail }}
							onLongPress={this.renderVendorDetails}
							onPress={() => this.renderVendorDetails(item)}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.uuid}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </List>
		</View>);
	}
}

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
    //justifyContent: 'space-around',
  },
  rating: {
    paddingTop: 5
  },
  customercount: {
    paddingLeft: 10,
    color: 'grey'
  }
})

const mapStateToProps = state => ({
payload: state
});

const mapDispatchToProps = dispatch => ({
	fetchOrders: () => dispatch(fetchOrders())
});

const VendorSelectionContainer = connect(mapStateToProps,  mapDispatchToProps)(SelectionContainer);

export default VendorSelectionContainer;
