import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, View, TouchableOpacity, Modal } from 'react-native';
import { Button, Thumbnail } from 'native-base';
import Swiper from 'react-native-swiper';

import Style from './assets/style';

export default class ChatImage extends Component {
  static defaultProps = {
    currentMessage: {
      image: null,
    },
    containerStyle: {},
    imageStyle: {},
    images: [],
  };

  static propTypes = {
    images: PropTypes.array,
    currentMessage: PropTypes.object,
    containerStyle: View.propTypes.style,
    imageStyle: Image.propTypes.style,
  };

  constructor(props) {
    super(props);

    this.state = {
      imageModalVisible: false,
      indexImageSelected: 0,
    };
  }

  buildImages() {
    const rows = [];

    this.props.images.forEach((item, index) => {
      const key = index;
      if (item.image) {
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
            <Thumbnail style={Style.imageModal} square source={{ uri: item.image }} />
          </View>
        ));
      }
    });
    return rows;
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.setState({ imageModalVisible: true });
          }}
        >
          <View style={[this.props.containerStyle]}>
            <Image
              style={[Style.image, this.props.imageStyle]}
              source={{ uri: this.props.currentMessage.image }}
            />
          </View>
        </TouchableOpacity>
        <Modal transparent={false} visible={this.state.imageModalVisible}>
          <Swiper showsButtons title="Fotos" index={this.state.indexImageSelected}>
            {this.buildImages()}
          </Swiper>
        </Modal>
      </View>
    );
  }
}
