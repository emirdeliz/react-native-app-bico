import React, { Component, PropTypes } from 'react';
import { Navigator } from 'react-native';
import { connect } from 'react-redux';

import Home from '../home';
import Professional from '../professional';
import Job from '../job';
import Budget from '../budget';
import Chat from '../chat';
import Filter from '../filter';
import Login from '../login';
import Evaluation from '../evaluation';
import WorkContract from '../work-contract';
import WorkOffered from '../work-offered';
import AccountEdit from '../account-edit';

class Router extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    }

    handleNavigation = action => {
        this.props.dispatch(action);
    }

    renderScene(route, navigate) {
        switch (route.name) {
        case 'home':
            return <Home navigate={navigate} />;

        case 'professional':
            return <Professional navigate={navigate} {...route.passProps} />;

        case 'job':
            return <Job navigate={navigate} {...route.passProps} />;

        case 'budget':
            return <Budget navigate={navigate} {...route.passProps} />;

        case 'chat':
            return <Chat navigate={navigate} {...route.passProps} />;

        case 'filter':
            return <Filter navigate={navigate} {...route.passProps} />;

        case 'evaluation':
            return <Evaluation navigate={navigate} {...route.passProps} />;

        case 'work-contract':
            return <WorkContract navigate={navigate} {...route.passProps} />;

        case 'work-offered':
            return <WorkOffered navigate={navigate} {...route.passProps} />;

        case 'account-edit':
            return <AccountEdit navigate={navigate} {...route.passProps} editable={true} />;

        case 'login':
            return <Login navigate={navigate} {...route.passProps} />;

        default:
            break;
        }
    }

    render() {
        return (
            <Navigator
              direction="horizontal"
              renderScene={this.renderScene}
              initialRoute={{ name: 'home' }}
            />
        );
    }
}

export default connect(
    state => state,
    dispatch => ({ dispatch })
)(Router);
