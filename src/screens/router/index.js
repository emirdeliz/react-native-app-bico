import React, { Component, PropTypes } from 'react'
import { Navigator } from 'react-native'
import { connect } from 'react-redux'

import Home from '../home'
import Professional from '../professional'
import Work from '../work'
import Budget from '../budget'
import Chat from '../chat'

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

            case 'work':
                return <Work navigate={ navigate } { ...route.passProps }/>

            case 'budget':
                return <Budget navigate={ navigate } { ...route.passProps }/>

            case 'chat':
                return <Chat navigate={ navigate } { ...route.passProps }/>
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
