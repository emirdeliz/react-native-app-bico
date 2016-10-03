import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoadingComponent from './component';

class Loading extends Component {
    static propTypes = {
        pending: PropTypes.number
    }

    render() {
        const loading = (!this.props.done? <LoadingComponent/>: <View/>)
        return (
            loading
        );
    }
}

export default connect(
    state => ({ done: state.loadingReducer.done })
)(Loading);
