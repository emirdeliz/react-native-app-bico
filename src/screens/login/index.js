import React, { Component } from 'react'
import { Container, Header, Title, Button, Icon, Content, Text,
    View, List, ListItem, Input, InputGroup, Thumbnail } from 'native-base'

import Camera from 'react-native-camera'
import FBSDK from 'react-native-fbsdk'

import { Colors } from '../../shared/assets/style'
import { Style } from './assets/style'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            account: {
                name: '',
                email: '',
                picture: ''
            }
        }
    }

    componentDidMount() {
        this.initializeLoginFacebook()
    }

    initializeLoginFacebook() {
        const { AccessToken } = FBSDK
        let self = this

        AccessToken.getCurrentAccessToken().then((data) => {
            self.buildDataFacebook(data.accessToken.toString())
        })
    }

    buildDataFacebook(token) {
        const { GraphRequest, GraphRequestManager } = FBSDK

        let responseCallback = ((error, result) => {
            if (error) {
                alert('Erro ao autenticar com facebook: ' + error.code + ' ' + error.message)
            } else {
                let account = this.state.account
                account.name = result.name
                account.email = result.email
                account.picture = 'http://graph.facebook.com/' + result.id + '/picture?type=normal'

                console.log(result)

                this.props.navigate.push({
                    name: 'account-edit',
                    passProps: {
                        account: account
                    }
                })
            }
        })

        let profileRequestConfig = {
            httpMethod: 'GET',
            version: 'v2.5',
            parameters: {
                fields: {
                    string: 'id, name, email, first_name, last_name, gender, picture'
                }
            },
            accessToken: token
        }

        new GraphRequestManager().addRequest(new GraphRequest(
            '/me',
            profileRequestConfig,
            responseCallback,
        )).start();
    }

    render() {
        const { LoginButton, AccessToken } = FBSDK
        return (
            <Container>
                <View style={ Style.containerContent }>
                    <View style={ Style.containerLogo }>
                        <Icon name="ios-lock" style={ Style.iconLock }/>
                    </View>
                    <View style={ Style.containerData }>
                        <InputGroup borderType={ 'regular' }  style={Style.inputGroup }>
                            <Icon name="ios-mail" style={ Style.iconInputGroup }/>
                            <Input inlineLabel label='E-MAIL' value={ this.state.account.name }
                                onChangeText={(value) => {
                                    let account = this.state.account
                                    account.email = value
                                    this.setState({ account: account })
                                }
                            }/>
                        </InputGroup>
                        <View style={ Style.containerButton }>
                            <Button block onPress={ () => {
                                this.props.navigate.push({
                                    name: 'account-edit',
                                    passProps: {
                                        account: this.state.account
                                    }
                                })
                            }}>
                                Salvar
                            </Button>
                        </View>
                        <View style={ Style.containerDivider }>
                            <Text style={ Style.textDivider }>Ou</Text>
                        </View>
                        <View style={ Style.containerButton }>
                            <LoginButton style={ Style.buttonLoginSocial } publishPermissions={["publish_actions"]}
                                onLoginFinished={ (error, result) => {
                                      if (error) {
                                          alert("login has error: " + result.error);
                                      } else if (result.isCancelled) {
                                          alert("login is cancelled.");
                                      } else {
                                          this.initializeLoginFacebook()
                                      }
                                  }
                              } onLogoutFinished={ () => alert("logout.") }/>
                        </View>
                    </View>
                </View>
            </Container>
        );
    }
}
