import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Icon, Text, View, Input, InputGroup } from 'native-base';
import FBSDK from 'react-native-fbsdk';

import Style from './assets/style';

export default class Login extends Component {
  static propTypes = {
    navigate: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      account: {
        name: '',
        email: '',
        picture: '',
      },
    };
  }

  componentDidMount() {
    this.initializeLoginFacebook();
  }

  initializeLoginFacebook() {
    const { AccessToken } = FBSDK;
    const self = this;

    AccessToken.getCurrentAccessToken().then((data) => {
      self.buildDataFacebook(data.accessToken.toString());
    });
  }

  buildDataFacebook(token) {
    const { GraphRequest, GraphRequestManager } = FBSDK;

    const responseCallback = (error, result) => {
      if (error) {
        console.log(`Erro ao autenticar com facebook: ${error.code} ${error.message}`);
      } else {
        const { account } = this.state;
        account.name = result.name;
        account.email = result.email;
        account.picture = `http://graph.facebook.com/${result.id}/picture?type=normal`;

        this.props.navigate.push({
          name: 'account-edit',
          passProps: {
            account,
          },
        });
      }
    };

    const profileRequestConfig = {
      httpMethod: 'GET',
      version: 'v2.5',
      parameters: {
        fields: {
          string: 'id, name, email, first_name, last_name, gender, picture',
        },
      },
      accessToken: token,
    };

    new GraphRequestManager()
      .addRequest(new GraphRequest('/me', profileRequestConfig, responseCallback))
      .start();
  }

  render() {
    const { LoginButton } = FBSDK;
    return (
      <Container>
        <View style={Style.containerContent}>
          <View style={Style.containerLogo}>
            <Icon name="ios-lock" style={Style.iconLock} />
          </View>
          <View style={Style.containerData}>
            <InputGroup borderType="regular" style={Style.inputGroup}>
              <Icon name="ios-mail" style={Style.iconInputGroup} />
              <Input
                inlineLabel
                label="E-MAIL"
                value={this.state.account.name}
                onChangeText={(value) => {
                  const { account } = this.state;
                  account.email = value;
                  this.setState({ account });
                }}
              />
            </InputGroup>
            <View style={Style.containerButton}>
              <Button
                block
                onPress={() => {
                  this.props.navigate.push({
                    name: 'account-edit',
                    passProps: {
                      account: this.state.account,
                    },
                  });
                }}
              >
                Salvar
              </Button>
            </View>
            <View style={Style.containerDivider}>
              <Text style={Style.textDivider}>Ou</Text>
            </View>
            <View style={Style.containerButton}>
              <LoginButton
                style={Style.buttonLoginSocial}
                publishPermissions={['publish_actions']}
                onLoginFinished={(error, result) => {
                  if (error) {
                    console.log(`login has error: ${result.error}`);
                  } else if (result.isCancelled) {
                    console.log('login is cancelled.');
                  } else {
                    this.initializeLoginFacebook();
                  }
                }}
                onLogoutFinished={() => console.log('logout.')}
              />
            </View>
          </View>
        </View>
      </Container>
    );
  }
}
