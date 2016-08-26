import React, { Component, PropTypes } from 'react'
import { Image } from 'react-native'
import { Container, Header, View, Title, Text, Content, Button,
    Icon, InputGroup, Input, List, ListItem, Thumbnail } from 'native-base'

import * as ProfissionalMock from '../../mock/professional'
import { Style } from './assets/style'

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            result: ProfissionalMock.data
        }
    }

    componentDidMount() {
        // MOCK
        /*
        this.props.navigate.push({
            name: 'professional',
            passProps: {
                professional: ProfissionalMock.data[0]
            }
        })
        */
    }

    buildRows() {
        let rows = []

        this.state.result.forEach((item, key) => {
            rows.push(
                <ListItem key={ key } onPress={ () => {
                    this.props.navigate.push({
                        name: 'professional',
                        passProps: {
                            professional: item
                        }
                    })
                }} iconRight>
                    <View style={ Style.containerRow }>
                        <Thumbnail circular size={ 55 } source={{ uri: item.picture }} />
                        <View>
                            <View style={ Style.containerDistance }>
                                <Text>{ item.name }</Text>
                                <Text style={ Style.textDistance }>{ item.distance } KM</Text>
                            </View>
                            <View style={ Style.containerRating }>
                                <Icon name="logo-usd" style={ Style.iconRating }/>
                                <Text style={ Style.textRating }>{ item.noteAveragePrice }</Text>

                                <Icon name="ios-pricetag" style={ Style.iconRating }/>
                                <Text style={ Style.textRating }>{ item.noteAverageService }</Text>

                                <Icon name="ios-timer" style={ Style.iconRating }/>
                                <Text style={ Style.textRating }>{ item.noteAverageScore }</Text>
                            </View>
                        </View>
                    </View>
                    <Icon name="ios-arrow-forward" style={ Style.iconList }/>
                </ListItem>
            )
        })

        return rows
    }

    render() {
        return (
            <Container>
                <Header style={ Style.header } searchBar rounded>
                    <InputGroup>
                        <Icon name="ios-search" />
                        <Input placeholder="Busca" style={ Style.inputSearch }/>
                    </InputGroup>
                    <Button transparent>
                        <Icon style={ Style.iconFilter } name="ios-list" />
                    </Button>
                </Header>
                <Content>
                   <List>
                      { this.buildRows() }
                   </List>
                </Content>
            </Container>
        );
    }
}
