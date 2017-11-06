import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ScrollView, Text } from 'react-native';
import {
  Container,
  Header,
  Title,
  Thumbnail,
  Content,
  Button,
  Icon,
  View,
  List,
  ListItem,
  InputGroup,
  Input,
} from 'native-base';

import Swiper from 'react-native-swiper';
// import Camera from 'react-native-camera';

import { convertImageToBase64 } from '../../utils';
import RecordAudio from '../../shared/record-audio';
import Style from './assets/style';

export default class Budget extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.camera = null;
    this.state = {
      // cameraType: Camera.constants.Type.back,
      // cameraTarget: Camera.constants.CaptureTarget.cameraRoll,
      // captureQuality: Camera.constants.CaptureQuality.low,
      cameraProcessing: false,
      cameraModalVisible: false,

      imageModalVisible: false,
      imageModalSelected: 0,

      images: [
        { uri: 'https://mamempreendimentos.files.wordpress.com/2015/09/casa.jpg' },
        { uri: 'https://mamempreendimentos.files.wordpress.com/2015/09/casa.jpg' },
        { uri: 'https://mamempreendimentos.files.wordpress.com/2015/09/casa.jpg' },
      ],
    };
  }

  takePicture() {
    if (this.state.cameraProcessing) return;

    const self = this;
    self.setState({ cameraProcessing: true });

    this.camera
      .capture()
      .then((data) => {
        convertImageToBase64(data.path).then(
          (result) => {
            const { account } = self.state;
            account.picture = `data:image/png;base64,${result}`;
            self.setState({ account, cameraModalVisible: false, cameraProcessing: false });
          },
          (err) => {
            self.setState({ cameraProcessing: false });
            console.log(err);
          },
        );
      })
      .catch((err) => {
        self.setState({ cameraProcessing: false });
        console.error(err);
      });
  }

  buildPhotos() {
    const rows = [];

    this.state.images.forEach((item, index) => {
      const key = index;
      rows.push((
        <Button
          style={Style.buttonPhoto}
          rounded
          onPress={() => {
              this.setState({ imageModalVisible: true, imageModalSelected: index });
            }}
          key={key}
        >
          <Thumbnail size={100} source={item} />
        </Button>
      ));
    });

    return rows;
  }

  buildPhotosModal() {
    const rows = [];

    this.state.images.forEach((item, index) => {
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
          <Thumbnail style={Style.image} square source={item} />
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

  buildCameraModal() {
    /*
    <Camera
      ref={cam => (this.camera = cam)}
      style={Style.containerCamera}
      type={this.state.cameraType}
      captureAudio={false}
      captureTarget={this.state.cameraTarget}
      captureQuality={this.state.captureQuality}>
      <Button
        style={Style.buttonClose}
        bordered
        onPress={() => {
          this.setState({ cameraModalVisible: false });
        }}>
        Fechar
      </Button>
      <View style={Style.containerButtonCapture}>
        <Button rounded style={Style.buttonCapture} onPress={this.takePicture.bind(this)}>
          <Icon name="ios-camera" />
        </Button>
      </View>
    </Camera>
    */
    return (
      <Modal transparent={false} visible={this.state.cameraModalVisible} />
    );
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
          <Title>Orçamento</Title>
        </Header>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Fotos</Text>
            </ListItem>
          </List>
          <ScrollView style={Style.containerPhoto} horizontal>
            <Button
              rounded
              large
              style={Style.buttonPhoto}
              onPress={() => {
                this.setState({ cameraModalVisible: true });
              }}
            >
              <Icon style={Style.iconXLarge} name="ios-camera" />
            </Button>
            {this.buildPhotos()}
          </ScrollView>
          <List>
            <ListItem>
              <RecordAudio style={Style.containerDescription} />
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input
                  placeholder="Descrição"
                  onChangeText={text => this.setState({ text })}
                  value={this.state.text}
                />
              </InputGroup>
            </ListItem>
          </List>
          {this.buildPhotosModal()}
          {this.buildCameraModal()}
        </Content>
      </Container>
    );
  }
}

/*
    FIXME: Aguardar liberacao nova versao plugin camera. A atual exibe um erro

    JS Exception: Seems you're trying to access 'ReactNative.createClass' from the 'react-native' package.
    Perhaps you meant to access 'React.createClass' from the 'react' package instead?

    Link resportado: https://github.com/lwansbrough/react-native-camera/issues/362
*/
