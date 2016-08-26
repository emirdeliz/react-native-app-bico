import React, { Component, PropTypes } from 'react'
import { Platform } from 'react-native'
import { Container, Content, Header, Title, Button, Icon,
    Text, View } from 'native-base'

import { GiftedChat } from 'react-native-gifted-chat'

import ChatActions from '../chat-actions'
import ChatView from '../chat-view'
import { Style } from './assets/style'

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = { messages: [] };
        this.onSend = this.onSend.bind(this);
    }

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    user: {
                        _id: 1,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
                    text: 'Aqui é Body renderer Ipsum PORRA! Que não vai dá rapaiz, não vai dá essa porra. Não vai dá não.' +
                        'Sabe o que é isso daí? Trapézio descendente é o nome disso aí. Eita porra!, tá saindo da jaula o monstro!' +
                        'Bora caralho, você quer ver essa porra velho. Vo derrubar tudo essas árvore do parque ibirapuera.',
                    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0))
                }, {
                    _id: 2,
                    user: {
                        _id: 2,
                        name: this.props.professional.name,
                        avatar: this.props.professional.picture,
                    },
                    text: 'Eu quero esse 13',
                    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0))
                }, {
                    _id: 3,
                    user: {
                        _id: 2,
                        name: this.props.professional.name,
                        avatar: this.props.professional.picture,
                    },
                    text: 'É verão o ano ano ano',
                    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0))
                }, {
                    _id: 4,
                    user: {
                        _id: 1,
                        name: this.props.professional.name,
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
                    text: ' Que não vai dá rapaiz, não vai dá essa porra.' +
                    'Tá comigo porra. Bora caralho, você quer ver essa porra velho.',
                    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0))
                }, {
                    _id: 5,
                    user: {
                        _id: 2,
                        name: this.props.professional.name,
                        avatar: this.props.professional.picture,
                    },
                    text: ' Bora caralho, você quer ver essa porra velho.',
                    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0))
                }
            ],
        });
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
            <ChatView {...props} />
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
                    <GiftedChat { ...this.props } messages={ this.state.messages } renderActions={ this.buildCustomActions }
                        onSend={ this.onSend } user={{ _id: 1}} renderCustomView={ this.buildCustomView } />
                </View>
            </Container>
        );
    }
}
