import React from 'react';
import { Container } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../home';
import Professional from '../professional';
import Job from '../job';
import Budget from '../budget';
import Chat from '../chat';
import Filter from '../filter';
import Login from '../login';
import Evaluation from '../evaluation';
import WorkContract from '../work-contract';
import WorkOffered from '../work-offered';
import AccountEdit from '../account-edit';

const RootStack = new createStackNavigator({
  home: { screen: Home },
  professional: { screen: Professional },
  job: { screen: Job },
  budget: { screen: Budget },
  chat: { screen: Chat },
  filter: { screen: Filter },
  login: { screen: Login },
  evaluation: { screen: Evaluation },
  workContract: { screen: WorkContract },
  workOffered: { screen: WorkOffered },
  accountEdit: { screen: AccountEdit },
}, { headerMode: 'none' });

const AppContainer = createAppContainer(RootStack);

export default class Router extends React.Component {
  render() {
    return (
      <Container>
        <AppContainer />
      </Container>
    );
  }
}
