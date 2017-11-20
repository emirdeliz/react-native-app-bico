import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  Button,
  Icon,
  View,
  Text,
  List,
  ListItem,
  Thumbnail,
  Content,
} from 'native-base';

import { Colors } from '../../../shared/assets/style';
import Style from '../assets/style';

export default class AccountComponent extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    account: PropTypes.object,
  };

  static defaultProps = {
    account: {},
  };

  componentDidMount() {
    // MOCK
    /*
    setTimeout(() => {
      const { navigate } = this.props.navigation;
      navigate('workOffered', {
        account: this.props.account,
        editable: true,
      });
    }, 1000);
    */
  }

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Minha conta</Title>
          </Body>
          <Right>
            <Button
              textStyle={{ color: Colors.WHITE }}
              transparent
              onPress={() => {
                const { navigate } = this.props.navigation;
                navigate('accountEdit', {
                  account: this.props.account,
                  editable: true,
                });
              }}
            >
              <Text>Editar</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={Style.containerPhoto}>
            <Thumbnail circular source={{ uri: this.props.account.picture }} size={100} />
            <Text style={[Style.textNormal, Style.textToolbar]}>{this.props.account.name}</Text>
            <Text style={[Style.textSmall, Style.textToolbar]}>
              DDD {`${this.props.account.ddd} - ${this.props.account.adress}`}
            </Text>
          </View>
          <List>
            <ListItem
              onPress={() => {
                const { navigate } = this.props.navigation;
                navigate('workContract');
              }}
              style={Style.menuItem}
            >
              <Body>
                <Text style={Style.textNormal}>Meus serviços</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" style={Style.iconList} />
              </Right>
            </ListItem>
            <ListItem
              onPress={() => {
                const { navigate } = this.props.navigation;
                navigate('workOffered');
              }}
              iconRight
              style={Style.menuItem}
            >
              <Body>
                <Text style={Style.textNormal}>Meus clientes</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" style={Style.iconList} />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
