import React, { Component, PropTypes } from 'react'
import { Platform } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { Container, Content, Header, Title, Button, Icon,
    Text, View } from 'native-base'

import * as ChatMock from '../../mock/chat'
import ChatActions from '../chat-actions'
import ChatView from '../chat-view'
import ChatImage from '../chat-image'

import { Style } from './assets/style'

export default class Chat extends Component {

    constructor(props) {
        super(props)

        this.state = {
            messages: ChatMock.data
        }
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
            return (
                <ChatActions { ...props } />
            );
        }
    }

    buildCustomView(props) {
        return (
            <ChatView { ...props } />
        )
    }

    buildMessageImage(props) {
        return (
            <ChatImage { ...props } images={ this.state.messages }/>
        )
    }

    render() {
        return (
            <Container>
                <Header>
                    <Button transparent onPress={ () => this.props.navigate.pop() }>
                         <Icon name="ios-arrow-back" />
                    </Button>
                    <Title>{ this.props.professional.name }</Title>
                </Header>
                <View>
                    <GiftedChat { ...this.props } messages={ this.state.messages }
                        renderActions={ this.buildCustomActions } renderCustomView={ this.buildCustomView }
                        renderMessageImage={ this.buildMessageImage.bind(this) } onSend={ this.onSend.bind(this) }
                        user={ { _id: 1} } />
                </View>
            </Container>
        );
    }
}
