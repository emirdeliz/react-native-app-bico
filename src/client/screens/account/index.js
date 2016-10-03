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

    componentWillMount() {
        if(!this.props.account._id)
            this.props.find();
    }

    render() {
        const { account, navigate, pending } = this.props;
        const props = { account, navigate, pending };

        return (
            <AccountComponent {...props}/>
        );
    }
}

export default connect(
    state => ({
        account: state.accountReducer.get('result') || {}
    }),
    dispatch => bindActionCreators(AccountActions, dispatch)
)(Account);
