import React, { Component, PropTypes } from 'react'
import { Navigator } from 'react-native'
import { connect } from 'react-redux'

import Home from '../home'
import Professional from '../professional'
import Job from '../job'
import Budget from '../budget'
import Chat from '../chat'
import Filter from '../filter'
import Evaluation from '../evaluation'
import WorkContract from '../work-contract'
import WorkOffered from '../work-offered' 

@connect(
    state => state,
    dispatch => ({ dispatch })
)

export default class Router extends Component {
    static propTypes = {
        routes: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    handleNavigation = action => {
        this.props.dispatch(action);
    }

    renderScene(route, navigate) {
        switch (route.name) {
            case 'home':
                return el = <Home navigate={ navigate }/>

            case 'professional':
                return <Professional navigate={ navigate } { ...route.passProps }/>

            case 'job':
                return <Job navigate={ navigate } { ...route.passProps }/>

            case 'budget':
                return <Budget navigate={ navigate } { ...route.passProps }/>

            case 'chat':
                return <Chat navigate={ navigate } { ...route.passProps }/>

            case 'filter':
                return <Filter navigate={ navigate } { ...route.passProps }/>

            case 'evaluation':
                return <Evaluation navigate={ navigate } { ...route.passProps }/>

            case 'work-contract':
                return <WorkContract navigate={ navigate } { ...route.passProps }/>

            case 'work-offered':
                return <WorkOffered navigate={ navigate } { ...route.passProps }/>
        }
    }

    render() {
        return (
            <Navigator
                direction="horizontal"
                renderScene={ this.renderScene }
                initialRoute={{ name: 'home' }}/ >
        )
    }
}
