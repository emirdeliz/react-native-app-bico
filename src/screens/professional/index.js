import React, { Component, PropTypes } from 'react'
import { Container, Content, Header, Title, Button, Icon,
    Thumbnail, List, ListItem, View, Text  } from 'native-base'

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
        this.changePage('chat', {
            professional: this.props.professional
        })
        */
    }

    changePage(target, props) {
        this.props.navigate.push({
            name: target,
            passProps: props
        })
    }

    buildLastJob() {
        let rows = []
        this.props.professional.job.forEach((item, i) => {
            rows.push(
                <ListItem key={ i } onPress={ this.changePage.bind(this, 'job', {
                    job: item,
                    professional: this.props.professional
                }) } iconRight>
                    <View>
                        <View style={ Style.containerRow }>
                            <Text style={ Style.typeJob }>{ item.typeJob.description }</Text>
                            <FormattedDate style={ Style.dateJob } value={ item.dateExecution } skeleton="yMdhm" />
                        </View>
                        <View style={ Style.containerRow }>
                            <View style={ Style.containerRow }>
                                <Icon style={ Style.iconRating } name="logo-usd" />
                                <Text style={ Style.descriptionRating }>{ item.rating.notePrice }</Text>
                            </View>
                            <View style={ Style.containerRow }>
                                <Icon style={ Style.iconRating } name="ios-pricetag" />
                                <Text style={ Style.descriptionRating }>{ item.rating.noteService }</Text>
                            </View>
                            <View style={ Style.containerRow }>
                                <Icon style={ Style.iconRating } name="ios-timer" />
                                <Text style={ Style.descriptionRating }>{ item.rating.noteScore }</Text>
                            </View>
                        </View>
                        <Text style={ Style.descriptionJob }>{ item.rating.description }</Text>
                    </View>
                    <Icon name="ios-arrow-forward" style={ Style.iconList }/>
                </ListItem>
            )
        })

        return (
            <List>
                <ListItem itemDivider>
                    <Text>Últimos serviços</Text>
                </ListItem>
                { rows }
            </List>
        )
    }

    buildRating() {

        let items = [
            { icon: 'logo-usd', description: 'PREÇO', value: this.props.professional.noteAveragePrice },
            { icon: 'ios-pricetag', description: 'QUALIDADE', value: this.props.professional.noteAverageService },
            { icon: 'ios-timer', description: 'PRAZO', value: this.props.professional.noteAverageScore }
        ]

        let rows = []

        items.forEach((item, i) => {
            rows.push(
                <ListItem iconLeft key={ i }>
                    <View>
                        <View style={ Style.containerRow }>
                            <Icon style={ Style.iconRating } name={ item.icon } />
                            <Text style={ Style.descriptionItem }>{ item.description }</Text>
                        </View>
                        <Rating score={ item.value }/>
                    </View>
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
                <ListItem style={ Style.menuItem } iconLeft key={ i } onPress={
                    this.changePage.bind(this, item.target, { sender: this.props.professional })
                 }>
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
                        <View style={ Style.containerHeader }>
                            <View>
                                <Icon name="ios-navigate" style={ Style.iconNormal }/>
                                <Text style={ Style.textHeader }>{ this.props.professional.distance } KM</Text>
                            </View>
                            <View style={ Style.containerPhone }>
                                <Icon name="ios-call" style={ Style.iconNormal }/>
                                <Text style={ Style.textHeader }> (47) 8888-8888</Text>
                            </View>
                        </View>
                    </View>
                    <View style={ Style.containerDescription }>
                        <Text style={ Style.description }>Sobre mim:</Text>
                        <Text style={ Style.description }>{ this.props.professional.description }</Text>
                    </View>
                    { this.buildMenu() }
                    { this.buildRating() }
                    { this.buildLastJob() }
               </Content>
           </Container>
        )
    }
}
