import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AccountComponent from './component'
import * as AccountActions from '../../actions/account';

class Account extends Component {
    static propTypes = {
        actions: PropTypes.object,
        navigate: PropTypes.object,
        dispatch: PropTypes.func,
        find: PropTypes.func,
    }

    componentDidMount() {
        this.props.find();
    }

    render() {
        const { account, navigate } = this.props;

        //console.log(account)

        return (
            <AccountComponent navigate={navigate} />
        );
    }
}

export default connect(
    state = (state) => {
        console.log('>> ' + state.accountReducer.get('account'))
        return ({ account: state.accountReducer.get('account') || {} })
    },
    dispatch => bindActionCreators(AccountActions, dispatch)
)(Account);
