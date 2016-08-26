import React, { Component } from 'react'
import Immutable from 'immutable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Header, Title, Content, Button, Icon } from 'native-base'

import Menu from '../menu'
import SlideMenuComponent from './component'
import * as SlideMenuAction from '../../actions/slide-menu'

import { Colors } from '../../shared/assets/style'
import { Style } from './assets/style'

@connect(
    state => ({
        slideMenu: state.slideMenu
    }),
    dispatch => bindActionCreators(SlideMenuAction, dispatch)
)

export default class SlideMenu extends Component {

    constructor(props) {
        super(props)
    }

    componentWillReceiveProps(props) {
        const { slideMenu } = props
        let left = slideMenu.get('left')

        this.styleContent = left > 0 ? {
            backgroundColor: Colors.BLACK,
            opacity: 0.8
        }: {}
    }

    render() {
        return (
            <SlideMenuComponent { ...this.props }
                renderLeftView = {
                     <Menu { ...this.props } />
                }
                renderCenterView = {
                    <Container style={ this.styleContent }>
                        <Header style={ this.styleContent }>
                            <Button transparent onPress={ this.props.openMenu.bind(this)}>
                                <Icon name="ios-menu" />
                            </Button>
                            <Title>Minha Conta</Title>
                            <Button transparent onPress={ this.props.openMenu.bind(this)}>
                                Editar
                            </Button>
                        </Header>
                        <Content>
                            <Button transparent>
                                <Icon name="ios-menu" />
                            </Button>
                        </Content>
                    </Container>
                } />
        );
    }
}
