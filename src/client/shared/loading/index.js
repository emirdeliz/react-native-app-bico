import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import LoadingComponent from './component';

class Loading extends Component {
  static propTypes = {
    done: PropTypes.bool,
  };

  static defaultProps = {
    done: true,
  };

  render() {
    const loading = !this.props.done ? <LoadingComponent /> : <View />;
    return loading;
  }
}

export default connect(state => ({ done: state.loadingReducer.done }))(Loading);
