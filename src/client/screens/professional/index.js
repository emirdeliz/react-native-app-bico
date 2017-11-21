import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Header,
  Body,
  Left,
  Right,
  Title,
  Button,
  Icon,
  Thumbnail,
  List,
  ListItem,
  View,
  Text,
} from 'native-base';

import { FormattedDate } from 'react-native-globalize';

import Rating from '../../shared/rating';
import Style from './assets/style';

export default class Professional extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    professional: PropTypes.object,
  };

  static defaultProps = {
    professional: {},
  }

  componentDidMount() {
    // MOCK
    /*
    const { professional } = this.props.navigation.state.params;
    this.changePage('budget', {
      professional,
    });
    */
  }

  changePage(target, props) {
    const { navigate } = this.props.navigation;
    navigate(target, { ...props });
  }

  buildLastJob() {
    const rows = [];

    const { professional } = this.props.navigation.state.params;
    professional.job.forEach((item, index) => {
      const key = index;
      rows.push((
        <ListItem
          key={key}
          onPress={this.changePage.bind(this, 'job', {
            job: item, professional,
          })}
          iconRight
          style={Style.menuItem}
        >
          <Body>
            <View style={Style.containerRow}>
              <Text style={Style.typeJob}>{item.typeJob.description}</Text>
              <FormattedDate
                style={Style.dateJob}
                value={new Date(item.dateExecution)}
                skeleton="yMdhm"
              />
            </View>
            <View style={Style.containerRow}>
              <Text style={Style.descriptionRating}>
                <Icon style={Style.iconRating} name="logo-usd" />
                {item.rating.notePrice}
              </Text>
              <Text style={Style.descriptionRating}>
                <Icon style={Style.iconRating} name="ios-pricetag" />
                {item.rating.noteService}
              </Text>
              <Text style={Style.descriptionRating}>
                <Icon style={Style.iconRating} name="ios-timer" />
                {item.rating.noteScore}
              </Text>
            </View>
            <Text style={Style.descriptionJob}>{item.rating.description}</Text>
          </Body>
          <Right>
            <Icon name="ios-arrow-forward" style={Style.iconList} />
          </Right>
        </ListItem>
      ));
    });

    return (
      <List>
        <ListItem style={Style.menuItem} itemDivider>
          <Text>Últimos serviços</Text>
        </ListItem>
        {rows}
      </List>
    );
  }

  buildRating() {
    const { professional } = this.props.navigation.state.params;
    const items = [
      { icon: 'logo-usd', description: 'PREÇO', value: professional.noteAveragePrice },
      {
        icon: 'ios-pricetag',
        description: 'QUALIDADE',
        value: professional.noteAverageService,
      },
      { icon: 'ios-timer', description: 'PRAZO', value: professional.noteAverageScore },
    ];

    const rows = [];
    items.forEach((item, index) => {
      const key = index;
      rows.push((
        <ListItem style={Style.menuItem} iconLeft key={key}>
          <View>
            <View style={Style.containerRow}>
              <Icon style={Style.iconRating} name={item.icon} />
              <Text style={Style.descriptionItem}>{item.description}</Text>
            </View>
            <Rating score={item.value} />
          </View>
        </ListItem>
      ));
    });

    return (
      <List>
        <ListItem style={Style.menuItem} itemDivider>
          <Text>Média avalições</Text>
        </ListItem>
        {rows}
      </List>
    );
  }

  buildMenu() {
    const items = [
      { description: 'Solicitar orçamento', target: 'budget' },
      { description: 'Enviar mensagem', target: 'chat' },
    ];

    const { professional } = this.props.navigation.state.params;
    const rows = [];
    items.forEach((item, index) => {
      const key = index;
      rows.push((
        <ListItem
          style={Style.menuItem}
          iconLeft
          key={key}
          onPress={this.changePage.bind(this, item.target, { sender: professional })}
        >
          <Text>{item.description}</Text>
        </ListItem>
      ));
    });

    return <List style={Style.menu}>{rows}</List>;
  }

  render() {
    const { professional } = this.props.navigation.state.params;
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
          <Body style={Style.bodyHeader}>
            <Title>{professional.name}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={Style.containerRow}>
            <Thumbnail
              style={Style.picture}
              circular
              size={80}
              source={{ uri: professional.picture }}
            />
            <View style={Style.containerHeader}>
              <View>
                <Icon name="ios-navigate" style={Style.iconNormal} />
                <Text style={Style.textHeader}>{professional.distance} KM</Text>
              </View>
              <View style={Style.containerPhone}>
                <Icon name="ios-call" style={Style.iconNormal} />
                <Text style={Style.textHeader}> (47) 8888-8888</Text>
              </View>
            </View>
          </View>
          <View style={Style.containerDescription}>
            <Text style={Style.description}>Sobre mim:</Text>
            <Text style={Style.description}>{professional.description}</Text>
          </View>
          {this.buildMenu()}
          {this.buildRating()}
          {this.buildLastJob()}
        </Content>
      </Container>
    );
  }
}
