import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  View,
  Text,
  List,
  ListItem,
  Thumbnail,
} from 'native-base';

import Swipeout from 'react-native-swipeout';
import { Colors } from '../../shared/assets/style';
import Style from './assets/style';

import * as ContactMock from '../../mock/contact';

export default class Contact extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      contact: ContactMock.default,
      editable: false,
    };
  }

  buildMessages() {
    const rows = [];

    this.state.contact.forEach((item, index) => {
      const key = index;
      const indexLastMessage = item.messages.length;
      const lastMessage = item.messages[indexLastMessage - 1].text;

      rows.push((
        <ListItem key={key} iconRight>
          <Swipeout
            right={[
                {
                  text: 'Remover',
                  backgroundColor: Colors.RED,
                  onPress: this.remove.bind(this, item, index),
                },
              ]}
            backgroundColor="transparent"
            close={!this.state.editable}
          >
            <TouchableOpacity
              style={Style.containerRow}
              onPress={() => {
                const { navigate } = this.props.navigation;
                navigate('chat', {
                  messages: item.messages,
                  sender: item.sender,
                });
              }}
            >
              <Thumbnail circular size={80} source={{ uri: item.sender.picture }} />
              <View style={Style.containerDescription}>
                <Text style={Style.professionalName}>{item.sender.name}</Text>
                <Text style={Style.lastMessage}>{lastMessage}</Text>
              </View>
            </TouchableOpacity>
          </Swipeout>
        </ListItem>
      ));
    });

    return <List>{rows}</List>;
  }

  remove(item, i) {
    this.state.contact.splice(i, 1);
  }

  edit() {
    this.setState({ editable: !this.state.editable });
  }

  render() {
    return (
      <Container>
        <Header>
          <Title>Chat</Title>
          <Button
            transparent
            onPress={() => {
              const { navigate } = this.props.navigation;
              navigate.pop();
            }}
          >
            {this.state.editable ? 'OK' : 'Editar'}
          </Button>
        </Header>
        <Content>{this.buildMessages()}</Content>
      </Container>
    );
  }
}
