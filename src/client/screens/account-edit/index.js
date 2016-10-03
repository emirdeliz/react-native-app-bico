import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AccountEditComponent from './component'
import * as AccountActions from '../../actions/account';

class AccountEdit extends Component {
    static propTypes = {
        account: PropTypes.object,
        navigate: PropTypes.object,
        editable: PropTypes.bool,
        persist: PropTypes.func,
        dispatch: PropTypes.string
    }

    render() {
        const { account, navigate, editable, persist, error } = this.props;
        const props = { account, navigate, editable, persist, error };

        return (
            <AccountEditComponent {...props}/>
        );
    }
}

export default connect(
    state => ({
        error: state.accountReducer.get('error'),
        account: state.accountReducer.get('result')
    }),
    dispatch => bindActionCreators(AccountActions, dispatch)
)(AccountEdit);
