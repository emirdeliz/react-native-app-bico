import React, { Component } from 'react'
import { Modal, TouchableHighlight, ScrollView, Text } from 'react-native'
import { Container, Header, Title, Thumbnail, Content,
    Button, Icon, View, List, ListItem, InputGroup, Input } from 'native-base'

import Swiper from 'react-native-swiper'
import Camera from 'react-native-camera'

import RecordAudio from '../../shared/record-audio'
import { Style } from './assets/style'

export default class Budget extends Component {
    constructor(props) {
        super(props)

        this.camera = null
        this.state = {
            cameraType: Camera.constants.Type.back,
            cameraTarget: Camera.constants.CaptureTarget.disk,
            cameraModalVisible: false,

            imageModalVisible: false,
            imageModalSelected: 0,

            images: [
                { uri: 'https://mamempreendimentos.files.wordpress.com/2015/09/casa.jpg' },
                { uri: 'https://mamempreendimentos.files.wordpress.com/2015/09/casa.jpg' },
                { uri: 'https://mamempreendimentos.files.wordpress.com/2015/09/casa.jpg' }
            ]
        }
    }

    onBarCodeRead(e) {
        //console.log(e)
    }

    takePicture() {
        let self = this

        this.camera.capture(function(err, data) {
            let images = self.state.images
            images.push({
                isStatic: true,
                uri: 'file://' + data
            })

            self.setState({
                images: images,
                cameraModalVisible: false,
                teste: data
            })
        })
    }

    buildPhotos() {
        let rows = []

        this.state.images.forEach((item, i) => {
            rows.push(
                <Button style={ Style.buttonPhoto } rounded onPress={() => {
                    this.setState({ imageModalVisible: true, imageModalSelected: i })
                }} key={ i }>
                    <Thumbnail size={ 100 } source={ item } />
                </Button>
            )
        })

        return rows
    }

    buildPhotosModal() {
        let rows = []

        this.state.images.forEach((item, i) => {
            rows.push(
                <View key={ i } style={ Style.imageModalItem }>
                    <Button style={ Style.buttonClose } bordered onPress={() => {
                        this.setState({ imageModalVisible: false })
                    }}>Fechar</Button>
                    <Thumbnail style={ Style.image } square source={ item } />
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

    buildCameraModal() {
        return (
            <Modal transparent={ false } visible={ this.state.cameraModalVisible }>
                <Camera ref={(cam) => { this.camera = cam }} style={ Style.containerCamera }
                    onBarCodeRead={ this.onBarCodeRead } type={ this.state.cameraType }
                    captureTarget={ this.state.cameraTarget }>
                    <Button style={ Style.buttonClose } bordered onPress={() => {
                        this.setState({ cameraModalVisible: false })
                    }}>Fechar</Button>

                    <View style={ Style.containerButtonCapture }>
                        <Button rounded style={ Style.buttonCapture } onPress={ this.takePicture.bind(this) }>
                            <Icon name="ios-camera" />
                        </Button>
                    </View>
                </Camera>
            </Modal>
        )
    }

    render() {
        return (
            <Container>
                <Header>
                    <Button transparent onPress={ () => this.props.navigate.pop() }>
                        <Icon name="ios-arrow-back" />
                    </Button>
                    <Title>Orçamento</Title>
                </Header>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text>Fotos</Text>
                        </ListItem>
                    </List>
                    <ScrollView style={ Style.containerPhoto } horizontal={ true }>
                        <Button rounded large style={ Style.buttonPhoto } onPress={ () => {
                            this.setState({ cameraModalVisible: true })
                        }}>
                            <Icon style={ Style.iconLarge } name="ios-camera" />
                        </Button>
                        { this.buildPhotos() }
                    </ScrollView>
                    <List>
                        <ListItem>
                            <RecordAudio style={ Style.containerDescription }/>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Input placeholder="Descrição" onChangeText={
                                    (text) => this.setState({text})
                                } value={this.state.text}/>
                            </InputGroup>
                        </ListItem>
                    </List>
                    { this.buildPhotosModal() }
                    { this.buildCameraModal() }
                </Content>
            </Container>
        )
    }
}

/*
    FIXME: Aguardar liberacao nova versao plugin camera. A atual exibe um erro

    JS Exception: Seems you're trying to access 'ReactNative.createClass' from the 'react-native' package.
    Perhaps you meant to access 'React.createClass' from the 'react' package instead?

    Link resportado: https://github.com/lwansbrough/react-native-camera/issues/362
*/
