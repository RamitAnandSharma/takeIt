/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


// import { AppRegistry } from 'react-native';
// import React, { Component } from 'react';
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
//
//
// import Container from './src/container';
// import reduce from './src/reducers';
//
// const store = createStore(reduce)
//
// const reduxApp =()=>(
//     <Provider store={store}>
//     <Container />
//   </Provider>
// )
// AppRegistry.registerComponent('takeIt', () => reduxApp);
