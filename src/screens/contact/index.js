import React, { Component, PropTypes } from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, Header, Title, Content, Button, Icon,
    View, Text, List, ListItem, Thumbnail } from 'native-base'

import Swipeout from 'react-native-swipeout'
import { Colors } from '../../shared/assets/style'
import { Style } from './assets/style'

import * as ContactMock from '../../mock/contact'

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contact: ContactMock.data,
            editable: false
        }
    }

    buildMessages() {
        let rows = []

        this.state.contact.forEach((item, i) => {
            let indexLastMessage = item.messages.length
            let lastMessage = item.messages[indexLastMessage -1].text

            rows.push(
                <ListItem key={ i } iconRight>
                    <Swipeout right={ [{text: 'Remover', backgroundColor: Colors.RED, onPress: this.remove.bind(this, item, i) }]}
                        backgroundColor={ 'transparent' } close={ !this.state.editable }>
                        <TouchableOpacity style={ Style.containerRow } onPress={ () => {
                            this.props.navigate.push({
                                name: 'chat',
                                passProps: {
                                    messages: item.messages,
                                    sender: item.sender
                                }
                            })
                        } }>
                            <Thumbnail circular size={ 80 } source={{ uri: item.sender.picture }} />
                            <View style={ Style.containerDescription }>
                                <Text style={ Style.professionalName }>{ item.sender.name }</Text>
                                <Text style={ Style.lastMessage }>{ lastMessage }</Text>
                            </View>
                        </TouchableOpacity>
                    </Swipeout>
                </ListItem>
            )
        })

        return (
            <List>{ rows }</List>
        )
    }

    remove(item, i) {
        this.state.contact.splice(i, 1)
        this.setState({ jobs: this.state.contact })
    }

    edit() {
        this.setState({ editable: !this.state.editable })
    }

    render() {
        return (
            <Container>
                <Header>
                    <Title>Chat</Title>
                    <Button transparent onPress={ () => this.props.navigate.pop() } onPress={ this.edit.bind(this) }>
                        { this.state.editable? 'OK':'Editar' }
                    </Button>
                </Header>
                <Content>
                    { this.buildMessages() }
                </Content>
            </Container>
        );
    }
}
