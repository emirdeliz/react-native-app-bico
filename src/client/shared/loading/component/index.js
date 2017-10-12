import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';

import Style from '../assets/style';

export default class LoadingComponent extends Component {
  render() {
    return <ActivityIndicator style={Style.loading} size="large" />;
  }
}
