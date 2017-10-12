import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Title, Content, Button, Icon } from 'native-base';

export default class Clients extends Component {
  static propTypes = {
    navigate: PropTypes.object.isRequired,
  };

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
