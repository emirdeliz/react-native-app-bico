import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Body,
  Left,
  Right,
} from 'native-base';

import Style from './assets/style';
import * as ChatMock from '../../mock/chat';
import ChatActions from '../chat-actions';
import ChatView from '../chat-view';
import ChatImage from '../chat-image';

export default class Chat extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    messages: PropTypes.array,
    sender: PropTypes.object,
  };

  static defaultProps = {
    messages: [],
    sender: {},
  };

  constructor(props) {
    super(props);

    this.state = {
      messages: this.props.messages ? this.props.messages : ChatMock.default,
      // messages: ChatMock.default,
    };
  }

  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

  buildCustomActions(props) {
    if (Platform.OS === 'ios') {
      return <ChatActions {...props} />;
    }
  }

  buildCustomView(props) {
    return <ChatView {...props} />;
  }

  buildMessageImage(props) {
    return <ChatImage {...props} images={this.state.messages} />;
  }

  render() {
    const { sender } = this.props.navigation.state.params;

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body style={Style.bodyHeader}>
            <Title>{sender.name}</Title>
          </Body>
          <Right />
        </Header>
        <GiftedChat
          {...this.props}
          messages={this.state.messages}
          renderActions={this.buildCustomActions}
          renderCustomView={this.buildCustomView}
          renderMessageImage={this.buildMessageImage.bind(this)}
          onSend={this.onSend.bind(this)}
          user={{ _id: 1 }}
        />
      </Container>
    );
  }
}
