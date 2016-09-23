import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as ProfessionalMock from '../../mock/professional';

import * as professionalActions from '../../actions/professional';
import SearchComponent from './component';

@connect(
    state => ({ state: state.professionalReducer }),
    dispatch => ({ actions: bindActionCreators(professionalActions, dispatch) })
)

export default class Search extends Component {
    static propTypes = {
        state: PropTypes.object,
        actions: PropTypes.object,
    }

    render() {
        const { state, actions } = this.props;
        state.map(t => console.log(t.get('text')));

        return (
            <SearchComponent professional={ProfessionalMock.data} {...actions} {...this.props} />
        );
    }
}
