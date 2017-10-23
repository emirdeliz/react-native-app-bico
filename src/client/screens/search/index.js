import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchComponent from './component';
import * as ProfessionalActions from '../../actions/professional';

class Search extends Component {
  static propTypes = {
    professional: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired,
    findAll: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.findAll();
  }

  render() {
    const { professional, navigation } = this.props;
    return <SearchComponent navigation={navigation} professional={professional} />;
  }
}

export default connect(
  state => ({ professional: state.professionalReducer.get('result') || [] }),
  dispatch => bindActionCreators(ProfessionalActions, dispatch),
)(Search);
