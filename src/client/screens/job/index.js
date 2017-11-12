import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-native';
import Swiper from 'react-native-swiper';
import {
  Container,
  Header,
  Title,
  Thumbnail,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  View,
  Text,
  List,
  ListItem,
} from 'native-base';

import Style from './assets/style';

export default class Job extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    professional: PropTypes.object,
    job: PropTypes.object,
  };

  static defaultProps = {
    professional: {},
    job: {},
  }

  constructor(props) {
    super(props);

    this.state = {
      imageModalVisible: false,
      imageModalSelected: 0,
    };
  }

  buildPhotosModal() {
    const rows = [];
    const { job } = this.props.navigation.state.params;
    job.images.forEach((item, index) => {
      const key = index;
      rows.push((
        <View key={key} style={Style.imageModalItem}>
          <Button
            style={Style.buttonClose}
            bordered
            onPress={() => {
                this.setState({ imageModalVisible: false });
              }}
          >
              Fechar
          </Button>
          <Thumbnail style={Style.image} square source={item.path} />
          <Text style={Style.imageModalDescription}>{item.description}</Text>
        </View>
      ));
    });

    return (
      <Modal transparent={false} visible={this.state.imageModalVisible}>
        <Swiper showsButtons title="Fotos serviço" index={this.state.imageModalSelected}>
          {rows}
        </Swiper>
      </Modal>
    );
  }

  buildPhotos() {
    const rows = [];
    const { job } = this.props.navigation.state.params;
    job.images.forEach((item, index) => {
      const key = index;
      rows.push((
        <ListItem
          key={key}
          onPress={() => {
            this.setState({ imageModalVisible: true, imageModalSelected: index });
          }}
          style={Style.menuItem}
          iconRight
        >
          <View style={Style.containerRow}>
            <Thumbnail square size={80} source={item.path} />
            <View style={Style.containerPhotoDescription}>
              <Text style={Style.textSmall}>{item.description}</Text>
            </View>
          </View>
          <Icon name="ios-arrow-forward" style={Style.iconList} />
        </ListItem>
      ));
    });

    return (
      <List>
        <ListItem style={Style.menuItem} itemDivider>
          <Text>Fotos</Text>
        </ListItem>
        {rows}
      </List>
    );
  }

  render() {
    const { job, professional } = this.props.navigation.state.params;
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
          <List>
            <ListItem style={Style.menuItem} itemDivider>
              <Text>Descrição</Text>
            </ListItem>
            <ListItem style={Style.menuItem}>
              <View>
                <Text style={Style.textSmall}>{job.description}</Text>
              </View>
            </ListItem>
          </List>
          {this.buildPhotos()}
          {this.buildPhotosModal()}
        </Content>
      </Container>
    );
  }
}
