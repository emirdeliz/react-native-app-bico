import React from 'react';
import { Container } from 'native-base';
import { StackNavigator } from 'react-navigation';

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

const DataRouter = new StackNavigator({
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

export default class Router extends React.Component {
  render() {
    return (
      <Container>
        <DataRouter />
      </Container>
    );
  }
}
