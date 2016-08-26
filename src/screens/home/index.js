import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { Button, Icon } from 'native-base'

import Providers from '../providers'
import Clients from '../clients'
import Search from '../search'
import Footer from '../../shared/footer'
import { Style } from './assets/style'

export default class Home extends Component {
    // /Users/emir.liz/Library/Android/sdk
    // android avd
    // clear & emulator -avd react_native_nexus_4 & npm run android --stacktrace
    // --simulator 'iPhone 4s'
    // run in device: http://moduscreate.com/automated-ip-configuration-for-react-native-development/

    // R$ 3.950 - Luciano 3.850
    // R$ 1300 - Jonatas (Sem motor)
    // R$ 1700 -  Jonatas (Com motor)

    //https://facebook.github.io/react-native/docs/view.html

    constructor(props) {
        super(props)
        this.state = {
            currentPage: 'search'
        }
    }

    onChangeTab(item, index) {
        this.setState({
            currentPage: item.page
        })
    }

    buildContent() {
        switch (this.state.currentPage) {
            case 'search':
                return <Search navigate={ this.props.navigate }/>

            case 'providers':
                return <Providers navigate={ this.props.navigate }/>

            case 'clients':
                return <Clients navigate={ this.props.navigate }/>

            case 'chat':
                return <Providers navigate={ this.props.navigate }/>
        }
    }

    render() {
        let menuItems = [
            {
                desc: 'Buscar',
                icon: 'ios-search',
                page: 'search'
            }, {
                desc: 'Fornecedor',
                icon: 'ios-people',
                page: 'providers'
            }, {
                desc: 'Cliente',
                icon: 'ios-archive',
                page: 'clients'
            }, {
                desc: 'Chat',
                icon: 'ios-chatboxes',
                page: 'chat'
            }
        ]

        return (
            <View style={ Style.containerColumn }>
    			<View></View>
    			<View style={ Style.content }>
                    { this.buildContent() }
    			</View>
    			<View>
    		        <Footer items={ menuItems } onChangeTab={ this.onChangeTab.bind(this) }></Footer>
    			</View>
			</View>
        );
    }
}
