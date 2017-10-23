import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { FormattedWrapper } from 'react-native-globalize';
import Expo from 'expo';

import Ionicons from '@expo/vector-icons/fonts/Ionicons.ttf';
import Router from './screens/router';
import configureStore from './store';

const store = configureStore();

class AppBico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Ionicons,
    });

    this.setState({ isReady: true });
  }

  render() {
    const { isReady } = this.state;
    return (
      <FormattedWrapper locale="pt" currency="R$">
        <Provider store={store}>
          { isReady ? <Router /> : <Expo.AppLoading /> }
        </Provider>
      </FormattedWrapper>
    );
  }
}

export default AppBico;
