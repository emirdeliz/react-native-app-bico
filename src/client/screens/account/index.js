import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AccountComponent from './component'
import * as AccountActions from '../../actions/account';

class Account extends Component {
    static propTypes = {
        actions: PropTypes.object,
        account: PropTypes.object,
        navigate: PropTypes.object,
        dispatch: PropTypes.func,
        find: PropTypes.func,
    }

    componentDidMount() {
        this.props.find();
    }

    render() {
        const { account, navigate } = this.props;
        const props = { account, navigate };

        return (
            <AccountComponent {...props}/>
        );
    }
}

export default connect(
    state => ({ account: state.accountReducer.get('account') || {} }),
    dispatch => bindActionCreators(AccountActions, dispatch)
)(Account);
