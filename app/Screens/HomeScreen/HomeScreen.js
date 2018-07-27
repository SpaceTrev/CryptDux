//imports react from react
import React, { Component } from 'react';
//imports a prebuilt view component from react-native
import { View } from 'react-native';
// importing the provider from redux
import { Provider } from 'react-redux';

//imports store from Store.js file
import Store from '../../Store';
//imports the header from the components directory
import { Header, CryptoContainer } from '../../components';

import style from './style/styles';

// exports the app and extends the React.Component class then renders an object that returns the react native view with the components inside
export default class Home extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={mainstyle}>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}



const {mainstyle} = style;