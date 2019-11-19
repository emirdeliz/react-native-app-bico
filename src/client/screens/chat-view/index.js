import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Linking, MapView, Platform, TouchableOpacity, View } from 'react-native';

import Style from './assets/style';

export default class ChatView extends Component {
  static propTypes = {
    currentMessage: PropTypes.object,
    containerStyle: PropTypes.any,
    mapViewStyle: PropTypes.any,
  };

  static defaultProps = {
    currentMessage: {},
    containerStyle: {},
    mapViewStyle: {},
  };

  render() {
    if (this.props.currentMessage.location) {
      return (
        <TouchableOpacity
          style={[this.props.containerStyle]}
          onPress={() => {
            const url = Platform.select({
              ios: `http://maps.apple.com/?ll=${this.props.currentMessage.location.latitude},${this
                .props.currentMessage.location.longitude}`,
              android: `http://maps.google.com/?q=${this.props.currentMessage.location
                .latitude},${this.props.currentMessage.location.longitude}`,
            });
            Linking.canOpenURL(url)
              .then((supported) => {
                if (supported) {
                  return Linking.openURL(url);
                }
              })
              .catch((err) => {
                console.error('An error occurred', err);
              });
          }}
        >
          <MapView
            style={[Style.mapView, this.props.mapViewStyle]}
            region={{
              latitude: this.props.currentMessage.location.latitude,
              longitude: this.props.currentMessage.location.longitude,
            }}
            annotations={[
              {
                latitude: this.props.currentMessage.location.latitude,
                longitude: this.props.currentMessage.location.longitude,
              },
            ]}
            scrollEnabled={false}
            zoomEnabled
          />
        </TouchableOpacity>
      );
    }
    return null;
  }
}
