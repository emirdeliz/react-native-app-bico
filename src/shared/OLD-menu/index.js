import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { Container, Content, List, ListItem, Text, Icon, Button } from 'native-base'
import { Style } from './assets/style'

export default class Menu extends Component {

    static propTypes = {
        navigate: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
    }

    buildHeader() {
        return (
            <View style={ Style.header }>
                <Text style={ Style.titleHeader }>Pedro Paulo</Text>
                <Text style={ Style.subTitleHeader }>pedro.p@gmail.com</Text>
            </View>
        )
    }

    buildRow(item) {
        return (
            <ListItem iconLeft>
                <Button transparent onPress={ () => this.props.navigate({ type: 'push', key: item.page }) }>
                    <Icon style={ Style.menuItemIcon } name={ item.icon } />
                    <Text style={ Style.menuItemTitle }>{ item.desc }</Text>
                </Button>
            </ListItem>
        )
    }

    render() {
        return (
            <Container>
                <Content>
                    <List dataArray={ this.props.menuItems } renderSectionHeader={ this.buildHeader }
                        renderRow={ this.buildRow.bind(this) } />
                </Content>
            </Container>
        )
    }
}
