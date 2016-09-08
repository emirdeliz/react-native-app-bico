import React, { Component } from 'react'
import { Modal } from 'react-native'
import { Container, Header, Title, Button, Icon,
    View, List, ListItem, Input, InputGroup, Thumbnail } from 'native-base'

import Camera from 'react-native-camera'

import * as AccountMock from '../../mock/account'

import { Colors } from '../../shared/assets/style'
import { Style } from './assets/style'

export default class AccountEdit extends Component {
    constructor(props) {
        super(props)

        this.camera = null
        this.state = {
            cameraType: Camera.constants.Type.back,
            cameraTarget: Camera.constants.CaptureTarget.disk,
            cameraModalVisible: false,

            account: this.props.account
        }
    }

    takePicture() {
        let self = this
        this.camera.capture().then((data) => {
            let account = self.state.account
            account.picture = 'file://' + data.path
            this.setState({ account: account, cameraModalVisible: false })
        }).catch(err => console.error(err));
    }

    buildCameraModal() {
        return (
            <Modal transparent={ false } visible={ this.state.cameraModalVisible }>
                <Camera ref={(cam) => { this.camera = cam }} style={ Style.containerCamera }
                    type={ this.state.cameraType } captureAudio={ false }
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
                <Header style={ Style.toolbar }>
                    <Button textStyle={{ color: Colors.WHITE }} transparent onPress={ () => this.props.navigate.pop() }>
                        Cancelar
                    </Button>
                    <Title style={ Style.textToolbar }>Editar conta</Title>
                </Header>
                <View>
                    <View style={ Style.containerPhoto }>
                        <Thumbnail circular source={ {uri: this.state.account.picture} } size={ 100 }/>
                        <View style={ Style.containerEditPhoto }>
                            <Button rounded style={ Style.buttonRoundedSmall }
                                onPress={ () => this.setState({ cameraModalVisible: !this.state.cameraModalVisible }) }>
                                <Icon name="ios-camera" />
                            </Button>
                        </View>
                    </View>
                    <List>
                       <ListItem>
                           <InputGroup>
                               <Input inlineLabel label='E-MAIL' value={ this.state.account.email }
                                    onChangeText={(value) => {
                                        let account = this.state.account
                                        account.email = value
                                        this.setState({ account: account })
                                    }
                                }/>
                           </InputGroup>
                       </ListItem>
                       <ListItem>
                           <InputGroup>
                               <Input inlineLabel label='NOME' value={ this.state.account.name }
                                    onChangeText={(value) => {
                                        let account = this.state.account
                                        account.name = value
                                        this.setState({ account: account })
                                    }
                                }/>
                           </InputGroup>
                       </ListItem>
                       <ListItem>
                           <InputGroup>
                               <Input stackedLabel label='ENDEREÇO' value={ this.state.account.adress }
                                   onChangeText={(value) => {
                                       let account = this.state.account
                                       account.adress = value
                                       this.setState({ account: account })
                                   }
                               }/>
                           </InputGroup>
                       </ListItem>
                    </List>
                    <View style={ Style.containerSave }>
                        <Button block onPress={ () => {
                            if(this.props.editable)
                                this.props.navigate.pop()
                            else this.props.navigate.push({
                                name: 'home'
                            })
                        }}>
                            Salvar
                        </Button>
                    </View>
                    { this.buildCameraModal() }
                </View>
            </Container>
        );
    }
}
