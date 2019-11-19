import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Icon, Text, View, Input, InputGroup } from 'native-base';
import * as Facebook from 'expo-facebook';

import Style from './assets/style';

export default class Login extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
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

  async logIn() {
    // raul.aranguez@yannmail.win
    // data@123
    const key = '609576282546984';
    const {
      type, token,
    } = await Facebook.logInWithReadPermissionsAsync(key, {
      permissions: ['public_profile', 'email'],
    });

    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?fields=id,name,email&access_token=${token}`);
      const result = await response.json();

      const { id, name, email } = result;
      const { account } = this.state;
      account.name = name;
      account.email = email;
      account.picture = `http://graph.facebook.com/${id}/picture?type=normal`;

      const { navigate } = this.props.navigation;
      navigate('accountEdit', { account });
    }
  }

  render() {
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
                  const { navigate } = this.props.navigation;
                  navigate('accountEdit', {
                    account: this.state.account,
                  });
                }}
              >
                <Text>Salvar</Text>
              </Button>
            </View>
            <View style={Style.containerDivider}>
              <Text style={Style.textDivider}>Ou</Text>
            </View>
            <View style={Style.containerButton}>
              <Button
                block
                primary
                onPress={() => this.logIn()}
              >
                <Text>Login com Facebook</Text>
              </Button>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}
