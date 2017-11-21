import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Left,
  Right,
  Body,
  Button,
  View,
  Text,
  List,
  ListItem,
  Thumbnail,
} from 'native-base';
import { FormattedDate } from 'react-native-globalize';
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
      const lastMessage = item.messages[indexLastMessage - 1];

      rows.push((
        <ListItem key={key} style={Style.menuItem}>
          <Swipeout
            right={[{
              text: 'Remover',
              backgroundColor: Colors.RED,
              onPress: this.remove.bind(this, item, index),
              type: 'delete',
            }]}
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
              <View>
                <View style={Style.containerColumn}>
                  <View style={Style.containerRow}>
                    <Thumbnail
                      circular
                      size={80}
                      source={{ uri: item.sender.picture }}
                      style={Style.picture}
                    />
                    <View style={Style.containerDescription}>
                      <Text style={Style.professionalName}>{item.sender.name}</Text>
                      <Text style={Style.lastMessageText}>{lastMessage.text}</Text>
                      <FormattedDate
                        style={Style.lastMessageDate}
                        value={new Date(lastMessage.createdAt)}
                        skeleton="yMdhm"
                      />
                    </View>
                  </View>
                </View>
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
    const { editable } = this.state;
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Chat</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.setState({ editable: !editable })}
            >
              <Text>{this.state.editable ? 'OK' : 'Editar'}</Text>
            </Button>
          </Right>
        </Header>
        <Content>{this.buildMessages()}</Content>
      </Container>
    );
  }
}
