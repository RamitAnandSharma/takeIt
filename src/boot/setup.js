import React, {Component} from 'react';
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";
import getTheme from "@theme/components/index";
import variables from "@theme/variables/platform";

import configureStore from "./configureStore";
import AppContainer from "./../AppContainer";


export default class Setup extends Component<Props> {

  render() {
    const store = configureStore();
    return (
      //<StyleProvider style={getTheme(variables)}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    //  </StyleProvider>
    );
  }

}
