import React, { Component, PropTypes } from 'react'
import { Image, Modal } from 'react-native'
import { Container, Header, View, Title, Text, Content, Button,
    Icon, InputGroup, Input, List, ListItem, Thumbnail, Badge } from 'native-base'

import * as ProfissionalMock from '../../mock/professional'
import * as FilterMock from '../../mock/filter'

import Filter from '../filter'
import { Style } from './assets/style'

export default class Search extends Component {

    constructor(props) {
        super(props)

        this.state = {
            result: ProfissionalMock.data,
            categoryFilter: null
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
                }} style={ Style.containerItem } iconRight>
                    <View style={ Style.containerRow }>
                        <Thumbnail circular size={ 80 } source={{ uri: item.picture }} />
                        <View>
                            <View style={ Style.containerDistance }>
                                <Text>{ item.name }</Text>
                                <Text style={ Style.textDistance }>{ item.distance } KM</Text>
                            </View>
                            <View style={ Style.containerRow }>
                                <View style={ Style.containerRating }>
                                    <Icon name="logo-usd" style={ Style.iconRating }/>
                                    <Text style={ Style.textRating }>{ item.noteAveragePrice }</Text>
                                </View>
                                <View style={ Style.containerRating }>
                                    <Icon name="ios-pricetag" style={ Style.iconRating }/>
                                    <Text style={ Style.textRating }>{ item.noteAverageService }</Text>
                                </View>
                                <View style={ Style.containerRating }>
                                    <Icon name="ios-timer" style={ Style.iconRating }/>
                                    <Text style={ Style.textRating }>{ item.noteAverageScore }</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Icon name="ios-arrow-forward" style={ Style.iconList }/>
                </ListItem>
            )
        })

        return (
            <List>{ rows }</List>
        )
    }

    render() {
        return (
            <Container>
                <Header style={ Style.header } searchBar rounded>
                    <InputGroup>
                        <Input placeholder="Buscar" style={ Style.inputSearch }/>
                    </InputGroup>
                    <Button transparent onPress={ () => {
                        this.props.navigate.push({
                            name: 'filter',
                            passProps: {
                                selectedFilter: (item) => this.setState({ categoryFilter: item }),
                                filter: FilterMock.data
                            }
                        }) }}>
                        <Icon style={ Style.iconFilter } name="ios-list" />
                    </Button>
                </Header>
                <Content>
                    { this.buildRows() }
                </Content>
            </Container>
        );
    }
}
