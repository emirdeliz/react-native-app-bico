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
        persist: PropTypes.func,
        editable: PropTypes.bool
    }

    render() {
        const { account, navigate, editable, persist, error, result } = this.props;
        const props = { account, navigate, editable, persist, error, result };

        return (
            <AccountEditComponent {...props}/>
        );
    }
}

export default connect(
    state => (
        { error: state.accountReducer.get('error') || '' },
        { result: state.accountReducer.get('result')}
    ),
    dispatch => bindActionCreators(AccountActions, dispatch)
)(AccountEdit);
