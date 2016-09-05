import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { Button, Icon } from 'native-base'

import Account from '../account'
import Clients from '../clients'
import Contact from '../contact'
import Search from '../search'
import Footer from '../../shared/footer'
import { Style } from './assets/style'

export default class Home extends Component {
    // /Users/emir.liz/Library/Android/sdk
    // android avd
    // clear & emulator -avd nexus_4 & npm run android --stacktrace
    // --simulator 'iPhone 4s'
    // run in device: http://moduscreate.com/automated-ip-configuration-for-react-native-development/

    // R$ 3.950 - Luciano 3.850
    // R$ 1300 - Jonatas (Sem motor)
    // R$ 1700 -  Jonatas (Com motor)

    //https://facebook.github.io/react-native/docs/view.html

    constructor(props) {
        super(props)
        this.state = {
            currentPage: 'account'
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
                return <Search navigate={ this.props.navigate } />

            case 'account':
                return <Account navigate={ this.props.navigate } />

        //  case 'clients':
        //      return <Clients navigate={ this.props.navigate }/>

            case 'chat':
                return <Contact navigate={ this.props.navigate } />
        }
    }

    render() {
        let menuItems = [
            {
                desc: 'Buscar',
                icon: 'ios-search',
                page: 'search'
            }, {
                desc: 'Minha Conta',
                icon: 'ios-create',
                page: 'account'
            },
            /*
            {
                desc: 'Cliente',
                icon: 'ios-archive',
                page: 'clients'
            },
            */ {
                desc: 'Chat',
                icon: 'ios-chatboxes',
                page: 'chat'
            }
        ]

        return (
            <View style={ Style.containerColumn }>
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
