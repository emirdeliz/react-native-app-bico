import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Title,
  Left,
  Right,
  Body,
  Content,
  Button,
  Icon,
  Text,
  List,
  ListItem,
} from 'native-base';

import Style from './assets/style';

export default class Filter extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    const { filter } = this.props.navigation.state.params;
    this.state = {
      currentFilter: filter,
      path: [],
    };
  }

  buildFilter() {
    const rows = [];
    const currentFilter = this.state.currentFilter.types
      ? this.state.currentFilter.types
      : this.state.currentFilter;

    currentFilter.forEach((item, index) => {
      const key = index;
      rows.push((
        <ListItem
          style={Style.menuItem}
          key={key}
          onPress={() => {
            if (item.types) {
              this.state.path.push(this.state.currentFilter);
              this.setState({ currentFilter: item, path: this.state.path });
            } else {
              // const { selectedFilter } = this.props.navigation.state.params;
              // selectedFilter(item);
              this.props.navigation.goBack();
            }
          }}
        >
          <Text>{item.description}</Text>
        </ListItem>
      ));
    });
    return <List>{rows}</List>;
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                if (this.state.path.length === 0) {
                  this.props.navigation.goBack();
                } else {
                  const previousFilter = this.state.path.pop();
                  this.setState({ currentFilter: previousFilter, path: this.state.path });
                }
              }}
            >
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>
              Categorias
              <Text style={Style.subTitle}>
                {this.state.currentFilter.description}
              </Text>
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>{this.buildFilter()}</Content>
      </Container>
    );
  }
}
