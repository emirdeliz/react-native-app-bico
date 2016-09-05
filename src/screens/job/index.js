import React, { Component } from 'react'
import { Modal } from 'react-native'
import Swiper from 'react-native-swiper'
import { Container, Header, Title, Thumbnail, Content,
    Button, Icon, View, Text, List, ListItem } from 'native-base'

import { Style } from './assets/style'

export default class Job extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imageModalVisible: false,
            imageModalSelected: 0
        }
    }

    buildPhotosModal() {
        let rows = []

        this.props.job.images.forEach((item, i) => {
            rows.push(
                <View key={ i } style={ Style.imageModalItem }>
                    <Button style={ Style.buttonClose } bordered onPress={() => {
                        this.setState({ imageModalVisible: false })
                    }}>Fechar</Button>
                    <Thumbnail style={ Style.image } square source={ item.path } />
                    <Text style={ Style.imageModalDescription }>{ item.description }</Text>
                </View>
            )
        })

        return (
            <Modal transparent={ false } visible={ this.state.imageModalVisible }>
                <Swiper showsButtons={ true } title="Fotos serviço" index={ this.state.imageModalSelected }>
                    { rows }
                </Swiper>
            </Modal>
        )
    }

    buildPhotos() {
        let rows = []

        this.props.job.images.forEach((item, i) => {
            rows.push(
                <ListItem key={ i } onPress={() => {
                    this.setState({ imageModalVisible: true, imageModalSelected: i })
                }} iconRight>
                    <View style={ Style.containerRow }>
                        <Thumbnail square size={ 80 } source={ item.path } />
                        <View style={ Style.containerPhotoDescription }>
                            <Text style={ Style.textSmall }>{ item.description }</Text>
                        </View>
                    </View>
                    <Icon name="ios-arrow-forward" style={ Style.iconList }/>
                </ListItem>
            )
        })

        return (
            <List>
                <ListItem itemDivider>
                    <Text>Fotos</Text>
                </ListItem>
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
                    <List>
                        <ListItem itemDivider>
                            <Text>Descrição</Text>
                        </ListItem>
                        <ListItem>
                            <View>
                                <Text style={ Style.textSmall }>{ this.props.job.description }</Text>
                            </View>
                        </ListItem>
                    </List>
                    { this.buildPhotos() }
                    { this.buildPhotosModal() }
                </Content>
            </Container>
        );
    }
}
