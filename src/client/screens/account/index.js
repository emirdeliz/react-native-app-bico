/* eslint no-underscore-dangle: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AccountComponent from './component';
import * as AccountActions from '../../actions/account';

class Account extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    find: PropTypes.func.isRequired,
    account: PropTypes.object,
    pending: PropTypes.bool,
  };

  static defaultProps = {
    account: PropTypes.object,
    pending: false,
  };

  componentWillMount() {
    if (!this.props.account._id) this.props.find();
  }

  render() {
    const { account, navigation, pending } = this.props;
    const props = { account, navigation, pending };

    return <AccountComponent {...props} />;
  }
}

export default connect(
  state => ({
    account: state.accountReducer.get('result') || {},
  }),
  dispatch => bindActionCreators(AccountActions, dispatch),
)(Account);
