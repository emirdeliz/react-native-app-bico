import React, { Component, PropTypes } from 'react';
import { Container, Header, Title, Content, Button, Icon } from 'native-base';

export default class Clients extends Component {
    static propTypes = {
        navigate: PropTypes.object,
    }

    render() {
        return (
            <Container>
                <Header>
                    <Button transparent onPress={() => this.props.navigate({ type: 'pop' })}>
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
