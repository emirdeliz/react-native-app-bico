import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Title,
  Content,
  Left,
  Right,
  Body,
  Button,
  Icon,
  List,
  ListItem,
  InputGroup,
  Input,
  Text,
} from 'native-base';
import { View } from 'react-native';

import Rating from '../../shared/rating';
import Style from './assets/style';

export default class Evaluation extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    job: PropTypes.object,
  };

  static defaultProps = {
    job: {},
  }

  constructor(props) {
    super(props);

    this.state = {
      notePrice: 0,
      noteService: 0,
      noteScore: 0,
    };
  }

  buildRating() {
    const items = [
      { icon: 'logo-usd', description: 'PREÇO', value: this.state.notePrice },
      { icon: 'ios-pricetag', description: 'QUALIDADE', value: this.state.noteService },
      { icon: 'ios-timer', description: 'PRAZO', value: this.state.noteScore },
    ];

    const rows = [];

    items.forEach((item, index) => {
      const key = index;
      rows.push((
        <ListItem iconLeft key={key} style={Style.menuItem}>
          <View>
            <View style={Style.containerRow}>
              <Icon style={Style.iconRating} name={item.icon} />
              <Text style={Style.descriptionItem}>{item.description}</Text>
            </View>
            <Rating editable score={item.value} />
          </View>
        </ListItem>
      ));
    });

    return (
      <List>
        <ListItem itemDivider style={Style.menuItem}>
          <Text>Notas</Text>
        </ListItem>
        {rows}
        <ListItem style={Style.menuItem}>
          <InputGroup>
            <Input stackedLabel placeholder="OBSERVAÇÕES" />
          </InputGroup>
        </ListItem>
      </List>
    );
  }

  sendRating() {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Avaliação Serviço</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem itemDivider style={Style.menuItem}>
              <Text>Descrição</Text>
            </ListItem>
          </List>
          <View>
            <Text style={Style.descriptionJob}>{this.props.job.description}</Text>
          </View>
          {this.buildRating()}
          <View style={Style.containerSend}>
            <Button block primary onPress={this.sendRating.bind(this)}>
              <Text>Enviar</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
