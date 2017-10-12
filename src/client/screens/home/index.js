import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Account from '../account';
import Contact from '../contact';
import Search from '../search';
import Footer from '../../shared/footer';
import Loading from '../../shared/loading';

import Style from './assets/style';

export default class Home extends Component {
  // /Users/emir.liz/Library/Android/sdk
  // android avd
  // clear & emulator -avd nexus_4 & npm run android --stacktrace
  // --simulator 'iPhone 4s'
  // run in device: http://moduscreate.com/automated-ip-configuration-for-react-native-development/

  // https://facebook.github.io/react-native/docs/view.html

  static propTypes = {
    navigate: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'search',
    };
  }

  componentDidMount() {
    /*
        this.props.navigate.push({
            name: 'login',
            passProps: {
                navigate: this.props.navigate
            }
        })
        */
  }

  onChangeTab(item) {
    this.setState({
      currentPage: item.page,
    });
  }

  buildContent() {
    switch (this.state.currentPage) {
      case 'search':
        return <Search navigate={this.props.navigate} />;

      case 'account':
        return <Account navigate={this.props.navigate} />;

      //  case 'clients':
      //      return <Clients navigate={ this.props.navigate }/>

      case 'chat':
        return <Contact navigate={this.props.navigate} />;

      default:
        break;
    }
  }

  render() {
    const menuItems = [
      {
        desc: 'Buscar',
        icon: 'ios-search',
        page: 'search',
      },
      {
        desc: 'Minha Conta',
        icon: 'ios-create',
        page: 'account',
      },
      /*
            {
                desc: 'Cliente',
                icon: 'ios-archive',
                page: 'clients'
            },
            */ {
        desc: 'Chat',
        icon: 'ios-chatboxes',
        page: 'chat',
      },
    ];

    return (
      <View style={Style.containerColumn}>
        <Loading />
        <View style={Style.content}>{this.buildContent()}</View>
        <View>
          <Footer items={menuItems} onChangeTab={this.onChangeTab.bind(this)} />
        </View>
      </View>
    );
  }
}
