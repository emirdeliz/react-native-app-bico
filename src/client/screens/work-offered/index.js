import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  View,
  Text,
  List,
  ListItem,
  Thumbnail,
} from 'native-base';

import { FormattedDate } from 'react-native-globalize';
import Swipeout from 'react-native-swipeout';

import { Colors } from '../../shared/assets/style';
import * as JobMock from '../../mock/job';
import Style from './assets/style';

export default class WorkOffered extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      jobs: JobMock.data,
      editable: false,
    };
  }

  buildJobs() {
    const rows = [];

    this.state.jobs.forEach((item, index) => {
      const key = index;
      rows.push((
        <ListItem key={key} iconRight>
          <Swipeout
            right={[
                {
                  text: 'Remover',
                  backgroundColor: Colors.RED,
                  onPress: this.remove.bind(this, item, index),
                },
              ]}
            backgroundColor="transparent"
            close={!this.state.editable}
          >
            <View style={Style.containerRow}>
              <View style={Style.containerProfessional}>
                <Thumbnail
                  style={Style.picture}
                  circular
                  size={80}
                  source={{ uri: item.client.picture }}
                />
                <Text style={Style.textSmall}>{item.client.name}</Text>
                <Text style={Style.typeJob}>{item.typeJob.description}</Text>
                <FormattedDate
                  style={Style.dateJob}
                  value={new Date(item.dateExecution)}
                  skeleton="yMdhm"
                />
                <View style={Style.containerButtom}>
                  <View>
                    <Button
                      info
                      normal
                      bordered
                      onPress={() => {
                        const { navigate } = this.props.navigation;
                        navigate('chat', { sender: item.professional });
                      }}
                    >
                      <Icon name="ios-chatbubbles" />
                    </Button>
                  </View>
                </View>
              </View>
              <View style={Style.containerTypeJob}>
                <Text style={Style.descriptionJob}>{item.description}</Text>
              </View>
            </View>
          </Swipeout>
        </ListItem>
      ));
    });

    return <List>{rows}</List>;
  }

  remove(item, i) {
    this.state.jobs.splice(i, 1);
    this.setState({ jobs: this.state.jobs });
  }

  edit() {
    this.setState({ editable: !this.state.editable });
  }

  render() {
    return (
      <Container>
        <Header>
          <Button
            transparent
            onPress={() => this.props.navigation.goBack()}
          >
            <Icon name="ios-arrow-back" />
          </Button>
          <Title>Clientes</Title>
          <Button
            transparent
            onPress={() => this.props.navigation.goBack()}
          >
            {this.state.editable ? 'OK' : 'Editar'}
          </Button>
        </Header>
        <Content>{this.buildJobs()}</Content>
      </Container>
    );
  }
}
