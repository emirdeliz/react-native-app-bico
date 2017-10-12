import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  View,
  Text,
  Content,
  Button,
  Icon,
  InputGroup,
  Input,
  List,
  ListItem,
  Thumbnail,
} from 'native-base';

import * as FilterMock from '../../../mock/filter';
import Style from '../assets/style';

export default class SearchComponent extends Component {
  static propTypes = {
    navigate: PropTypes.object.isRequired,
    professional: PropTypes.array,
  };

  static defaultProps = {
    professional: [],
  };

  buildRows() {
    const rows = [];
    this.props.professional.forEach((item, index) => {
      const key = index;
      rows.push((
        <ListItem
          key={key}
          onPress={() => {
              this.props.navigate.push({
                name: 'professional',
                passProps: {
                  professional: item,
                },
              });
            }}
          style={Style.containerItem}
          iconRight
        >
          <View style={Style.containerRow}>
            <Thumbnail circular size={80} source={{ uri: item.picture }} />
            <View>
              <View style={Style.containerDistance}>
                <Text>{item.name}</Text>
                <Text style={Style.textDistance}>{item.distance} KM</Text>
              </View>
              <View style={Style.containerRow}>
                <View style={Style.containerRating}>
                  <Icon name="logo-usd" style={Style.iconRating} />
                  <Text style={Style.textRating}>{item.noteAveragePrice}</Text>
                </View>
                <View style={Style.containerRating}>
                  <Icon name="ios-pricetag" style={Style.iconRating} />
                  <Text style={Style.textRating}>{item.noteAverageService}</Text>
                </View>
                <View style={Style.containerRating}>
                  <Icon name="ios-timer" style={Style.iconRating} />
                  <Text style={Style.textRating}>{item.noteAverageScore}</Text>
                </View>
              </View>
            </View>
          </View>
          <Icon name="ios-arrow-forward" style={Style.iconList} />
        </ListItem>
      ));
    });

    return <List>{rows}</List>;
  }

  render() {
    return (
      <Container>
        <Header style={Style.header} searchBar rounded>
          <InputGroup>
            <Input placeholder="Buscar" style={Style.inputSearch} />
          </InputGroup>
          <Button
            transparent
            onPress={() => {
              this.props.navigate.push({
                name: 'filter',
                passProps: {
                  filter: FilterMock.default,
                },
              });
            }}
          >
            <Icon style={Style.iconFilter} name="ios-list" />
          </Button>
        </Header>
        <Content>{this.buildRows()}</Content>
      </Container>
    );
  }
}
