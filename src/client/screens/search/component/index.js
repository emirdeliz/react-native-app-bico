import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Item,
  List,
  View,
  Text,
  Content,
  Button,
  Icon,
  Input,
  ListItem,
  Thumbnail,
} from 'native-base';

import * as FilterMock from '../../../mock/filter';
import Style from '../assets/style';

export default class SearchComponent extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    professional: PropTypes.array,
  };

  static defaultProps = {
    professional: [],
  };

  componentDidMount() {
    setTimeout(() => {
      const { professional, navigation } = this.props;
      const { navigate } = navigation;
      navigate('professional', { professional: professional[0] });
    }, 3000);
  }

  buildRows() {
    const rows = [];
    this.props.professional.forEach((item, index) => {
      const key = index;
      rows.push((
        <ListItem
          key={key}
          onPress={() => {
            const { navigate } = this.props.navigation;
            navigate('professional', { professional: item });
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
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Buscar" />
            <Icon name="ios-people" />
          </Item>
          <Button
            transparent
            onPress={() => {
              const { navigate } = this.props.navigation;
              navigate('filter', {
                filter: FilterMock.default,
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
