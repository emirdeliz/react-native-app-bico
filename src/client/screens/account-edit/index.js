import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AccountEditComponent from './component';
import * as AccountActions from '../../actions/account';

class AccountEdit extends Component {
  static propTypes = {
    account: PropTypes.object,
    editable: PropTypes.bool,
    navigation: PropTypes.object.isRequired,
    persist: PropTypes.func.isRequired,
    dispatch: PropTypes.string,
    error: PropTypes.string,
  };

  static defaultProps = {
    account: {},
    editable: false,
    dispatch: '',
    error: '',
  };

  render() {
    const {
      account, navigation, editable, persist, error,
    } = this.props;
    const props = {
      account, navigation, editable, persist, error,
    };

    return <AccountEditComponent {...props} />;
  }
}

export default connect(
  state => ({
    error: state.accountReducer.get('error'),
    account: state.accountReducer.get('result'),
  }),
  dispatch => bindActionCreators(AccountActions, dispatch),
)(AccountEdit);
