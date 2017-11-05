import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Alert } from 'react-native';
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  View,
  List,
  ListItem,
  Input,
  InputGroup,
  Thumbnail,
  Text,
} from 'native-base';

// import Camera from 'react-native-camera';

import { convertImageToBase64 } from '../../../utils';
import { Colors } from '../../../shared/assets/style';
import Style from '../assets/style';

export default class AccountEditComponent extends Component {
  static propTypes = {
    persist: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    account: PropTypes.object,
    editable: PropTypes.bool,
    error: PropTypes.string,
  };

  static defaultProps = {
    account: {},
    editable: false,
    error: '',
  };

  constructor(props) {
    super(props);

    this.camera = null;

    this.state = {
      // cameraType: Camera.constants.Type.back,
      // cameraTarget: Camera.constants.CaptureTarget.cameraRoll,
      cameraModalVisible: false,
      cameraProcessing: false,
      // captureQuality: Camera.constants.CaptureQuality.low,

      account: this.props.account,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      Alert.alert('Erro ao salvar', nextProps.error);
    } else if (nextProps.account) {
      if (this.props.editable) {
        const { navigate } = this.props.navigation;
        navigate.pop();
      } else {
        const { navigate } = this.props.navigation;
        navigate('home');
      }
    }

    return true;
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

  persist() {
    this.props.persist(this.state.account);
  }

  buildCameraModal() {
    /*
    <Camera
      ref={cam => {
        this.camera = cam;
      }}
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

      <View
        style={[
          Style.containerButtonCapture,
          this.state.cameraProcessing ? Style.disabled : {},
        ]}>
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
        <Header style={Style.toolbar}>
          <Button transparent>
            <Text />
          </Button>
          <Title style={Style.textToolbar}>Editar conta</Title>
          <Button
            textStyle={{ color: Colors.WHITE }}
            transparent
            onPress={() => {
              const { navigate } = this.props.navigation;
              navigate.pop();
            }}
          >
            Cancelar
          </Button>
        </Header>
        <View>
          <View style={Style.containerPhoto}>
            <Thumbnail circular source={{ uri: this.state.account.picture }} size={100} />
            <View style={Style.containerEditPhoto}>
              <Button
                rounded
                style={Style.buttonRoundedSmall}
                onPress={() =>
                  this.setState({ cameraModalVisible: !this.state.cameraModalVisible })}
              >
                <Icon name="ios-camera" />
              </Button>
            </View>
          </View>
          <List>
            <ListItem>
              <InputGroup>
                <Input
                  inlineLabel
                  label="E-MAIL"
                  value={this.state.account.email}
                  onChangeText={(value) => {
                    const { account } = this.state;
                    account.email = value;
                    this.setState({ account });
                  }}
                />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input
                  inlineLabel
                  label="NOME"
                  value={this.state.account.name}
                  onChangeText={(value) => {
                    const { account } = this.state;
                    account.name = value;
                    this.setState({ account });
                  }}
                />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input
                  stackedLabel
                  label="ENDEREÇO"
                  value={this.state.account.adress}
                  onChangeText={(value) => {
                    const { account } = this.state;
                    account.adress = value;
                    this.setState({ account });
                  }}
                />
              </InputGroup>
            </ListItem>
          </List>
          <View style={Style.containerSave}>
            <Button block onPress={this.persist.bind(this)}>
              Salvar
            </Button>
          </View>
          {this.buildCameraModal()}
        </View>
      </Container>
    );
  }
}
