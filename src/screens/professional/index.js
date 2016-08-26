import React, { Component, PropTypes } from 'react'
import { Container, Content, Header, Title, Button, Icon,
    Thumbnail, List, ListItem, View, Text } from 'native-base'

import { FormattedDate } from 'react-native-globalize'

import Rating from '../../shared/rating'
import { Style } from './assets/style'

export default class Professional extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // MOCK
        /*
        this.onPress('chat', {
            professional: this.props.professional
        })
        */
    }

    onPress(target, props) {
        this.props.navigate.push({
            name: target,
            passProps: props
        })
    }

    buildLastWork() {
        let rows = []

        this.props.professional.work.forEach((item, i) => {
            rows.push(
                <ListItem key={ i } onPress={ this.onPress.bind(this, 'work', {
                    work: item,
                    professional: this.props.professional
                }) } iconRight>
                    <View>
                        <View style={ Style.containerRow }>
                            <Text style={ Style.typeWork }>{ item.typeWork.description }</Text>
                            <FormattedDate style={ Style.dateWork } value={ item.dateExecution } skeleton="yMdhm" />
                        </View>
                        <View style={ Style.containerRow }>
                            <Icon name="logo-usd" style={ Style.iconRating }/>
                            <Text style={ Style.textRating }>{ item.rating.notePrice }</Text>

                            <Icon name="ios-pricetag" style={ Style.iconRating }/>
                            <Text style={ Style.textRating }>{ item.rating.noteService }</Text>

                            <Icon name="ios-timer" style={ Style.iconRating }/>
                            <Text style={ Style.textRating }>{ item.rating.noteScore }</Text>
                        </View>
                        <Text style={ Style.descriptionWork }>{ item.rating.description }</Text>
                    </View>
                    <Icon name="ios-arrow-forward" style={ Style.iconList }/>
                </ListItem>
            )
        })

        return rows
    }

    buildRating() {
        let items = [
            { icon: 'logo-usd', value: this.props.professional.noteAveragePrice },
            { icon: 'ios-pricetag', value: this.props.professional.noteAverageService },
            { icon: 'ios-timer', value: this.props.professional.noteAverageScore }
        ]

        let rows = []

        items.forEach((item, i) => {
            rows.push(
                <ListItem iconLeft key={ i }>
                    <Icon name={ item.icon } style={ Style.iconRating }/>
                    <Rating style={ Style.rating } score={ item.value }/>
                </ListItem>
            )
        })

        return (
            <List>
                <ListItem itemDivider>
                    <Text>Média avalições</Text>
                </ListItem>
                { rows }
            </List>
        )
    }

    buildMenu() {
        let items = [
            { description: 'Solicitar orçamento', target: 'budget' },
            { description: 'Enviar mensagem', target: 'chat' }
        ]

        let rows = []

        items.forEach((item, i) => {
            rows.push (
                <ListItem style={ Style.menuItem } iconLeft key={ i } onPress={ this.onPress.bind(this, item.target, { professional: this.props.professional }) }>
                    <Text>{ item.description }</Text>
                </ListItem>
            )
        })

        return (
            <List style={ Style.menu }>
                { rows }
            </List>
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
               <Content>
                   <View style={ Style.containerRow }>
                        <Thumbnail style={ Style.picture } circular size={ 80 }
                            source={ {uri: this.props.professional.picture} } />
                        <View style={ Style.containerRow }>
                            <View>
                                <Icon name="ios-navigate" style={ Style.iconRating }/>
                                <Text style={ Style.textDistance }>{ this.props.professional.distance } KM</Text>
                            </View>
                            <View>
                                <Icon name="ios-call" style={ Style.iconRating }/>
                                <Text style={ Style.textDistance }> (47) 8888-8888</Text>
                            </View>
                        </View>
                    </View>
                    <View style={ Style.containerDescription }>
                        <Text style={ Style.description }>Sobre mim:</Text>
                        <Text style={ Style.description }>{ this.props.professional.description }</Text>
                    </View>
                    { this.buildMenu() }
                    { this.buildRating() }
                    <List>
                        <ListItem itemDivider>
                            <Text>Últimos serviços</Text>
                        </ListItem>
                        { this.buildLastWork() }
                    </List>
               </Content>
           </Container>
        )
    }
}
