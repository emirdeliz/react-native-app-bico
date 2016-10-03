import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchComponent from './component';
import * as ProfessionalActions from '../../actions/professional';

class Search extends Component {
    static propTypes = {
        professional: PropTypes.array,
        actions: PropTypes.object,
        navigate: PropTypes.object,
        dispatch: PropTypes.func,
        findAll: PropTypes.func,
    }

    componentDidMount() {
        this.props.findAll();
    }

    render() {
        const { professional, navigate } = this.props;

        return (
            <SearchComponent navigate={navigate} professional={professional} />
        );
    }
}

export default connect(
    state => ({ professional: state.professionalReducer.get('result') || [] }),
    dispatch => bindActionCreators(ProfessionalActions, dispatch)
)(Search);
