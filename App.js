// import React, {Component} from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//
//   Button
//
// } from 'react-native';
//
// import Home from './src/Home.js'
//
// export default Home;
import React, {Component} from "react";
import Setup from "./src/boot/setup";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Setup />;
  };
}
