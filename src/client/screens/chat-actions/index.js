import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, Modal, View, Text } from 'react-native';
import { Header, Title, Button } from 'native-base';
import CameraRollPicker from 'react-native-camera-roll-picker';

import Style from './assets/style';

export default class ChatActions extends Component {
    static propTypes = {
        navigate: PropTypes.object,
    }

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
        this.onActionsPress.bind(this);
        this.selectImages.bind(this);
    }


    onActionsPress() {
        const options = ['Biblioteca fotos', 'Enviar localização', 'Cancelar'];
        const cancelButtonIndex = options.length - 1;

        this.context.actionSheet().showActionSheetWithOptions({
            options,
            cancelButtonIndex,
        }, (buttonIndex) => {
            switch (buttonIndex) {
            case 0:
                this.setModalVisible(true);
                break;
            case 1:
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        this.props.onSend({
                            location: {
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude,
                            },
                        });
                    },
                    (error) => console.log(error.message),
                    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
                );
                break;
            default:
                break;
            }
        });
    }

    setModalVisible(visible = false) {
        this.setState({ modalVisible: visible });
    }

    selectImages(images) {
        this.setImages(images);
    }

    renderNavBar() {
        return (
            <Header>
                <Button transparent onPress={() => this.setModalVisible(false)}>Cancelar</Button>
                <Title>Biblioteca</Title>
                <Button transparent onPress={() => {
                    this.setModalVisible(false);

                    const images = this.getImages().map((image) => {
                        return {
                            image: image.uri,
                        };
                    });
                    this.props.onSend(images);
                    this.setImages([]);
                }}>Enviar</Button>
            </Header>
        );
    }

    renderIcon() {
        if (this.props.icon) {
            return this.props.icon();
        }
        return (
            <View style={[Style.wrapper, this.props.wrapperStyle]}>
                <Text style={[Style.iconText, this.props.iconTextStyle]}>+</Text>
            </View>
        );
    }

    render() {
        return (
            <TouchableOpacity style={[Style.container, this.props.containerStyle]}
              onPress={this.onActionsPress.bind(this)}
            >
                <Modal animationType={'slide'} transparent={false}
                  visible={this.state.modalVisible} onRequestClose={() => {
                      this.setModalVisible(false);
                  }}
                >
                    { this.renderNavBar() }
                    <CameraRollPicker maximum={10} imagesPerRow={4}
                      callback={this.selectImages.bind(this)} selected={[]}
                    />
                </Modal>
                { this.renderIcon() }
            </TouchableOpacity>
        );
    }
}

ChatActions.contextTypes = {
    actionSheet: React.PropTypes.func,
};

ChatActions.defaultProps = {
    onSend: () => {},
    options: {},
    icon: null,
    containerStyle: {},
    wrapperStyle: {},
    iconTextStyle: {},
};

ChatActions.propTypes = {
    onSend: React.PropTypes.func,
    options: React.PropTypes.object,
    icon: React.PropTypes.func,
    containerStyle: View.propTypes.style,
    wrapperStyle: View.propTypes.style,
    iconTextStyle: Text.propTypes.style,
};
