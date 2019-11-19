import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { FormattedProvider } from 'react-native-globalize';

import Router from './screens/router';
import configureStore from './store';

const store = configureStore();

class AppBico extends Component {
  render() {
    return (
      <FormattedProvider locale="pt" currency="R$">
        <Provider store={store}>
          <Router />
        </Provider>
      </FormattedProvider>
    );
  }
}

export default AppBico;
