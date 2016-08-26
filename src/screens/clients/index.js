import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import { Container, Header, Title, Content, Button, Icon } from 'native-base'

import { Style } from './assets/style'

export default class Clients extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Header>
                    <Button transparent onPress={ () => this.props.navigate({ type: 'pop' }) }>
                        <Icon name="ios-arrow-back" />
                    </Button>
                    <Title>Clientes</Title>
                </Header>

                <Content>
                    <Title>BLAAAA</Title>
                </Content>
            </Container>
        );
    }
}
