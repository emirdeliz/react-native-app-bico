import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AccountEditComponent from './component'
import * as AccountActions from '../../actions/account';

class AccountEdit extends Component {
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
        const { professional, navigate } = this.props;

        console.log(account)

        return (
            <AccountEditComponent navigate={navigate} />
        );
    }
}

export default connect(
    state => ({ account: state.accountReducer.get('account') || [] }),
    dispatch => bindActionCreators(AccountActions, dispatch)
)(AccountEdit);
