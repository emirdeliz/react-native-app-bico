import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { FormattedWrapper } from 'react-native-globalize';

import Router from './screens/router';
import configureStore from './store';

const store = configureStore();

const AppBico = () => (
    <FormattedWrapper locale="pt" currency="R$">
        <Provider store={store}>
            <Router />
        </Provider>
    </FormattedWrapper>
);

AppRegistry.registerComponent('AppBico', () => AppBico);
