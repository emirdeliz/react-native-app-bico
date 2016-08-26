import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Modal } from 'react-native'
import { Button, Thumbnail } from 'native-base'
import Swiper from 'react-native-swiper'

import { Style } from './assets/style'

export default class ChatImage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imageModalVisible: false,
            indexImageSelected: 0
        }
    }

    buildImages() {
        let rows = []
        let index = 0

        this.props.images.forEach((item, i) => {
            if (item.image) {
                rows.push(
                    <View key={ i } style={ Style.imageModalItem }>
                        <Button style={ Style.buttonClose } bordered onPress={() => {
                            this.setState({ imageModalVisible: false })
                        }}>Fechar</Button>
                        <Thumbnail style={ Style.imageModal } square source={ {uri:item.image} } />
                    </View>
                )

                if(this.props.currentMessage.image == item.currentMessage)
                    index = i
            }
        })

        //this.setState({ indexImageSelected: i })
        return rows
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => {
                    this.setState({ imageModalVisible: true })
                }}>
                    <View style={ [this.props.containerStyle] }>
                        <Image style={ [Style.image, this.props.imageStyle] }
                            source={ {uri: this.props.currentMessage.image} } />
                    </View>
                </TouchableOpacity>
                <Modal transparent={ false } visible={ this.state.imageModalVisible }>
                    <Swiper showsButtons={ true } title="Fotos" index={ this.state.indexImageSelected }>
                        { this.buildImages() }
                    </Swiper>
                </Modal>
            </View>
        );
    }
}

ChatImage.defaultProps = {
    currentMessage: {
        image: null,
    },
    containerStyle: {},
    imageStyle: {},
};

ChatImage.propTypes = {
    images: React.PropTypes.array,
    currentMessage: React.PropTypes.object,
    containerStyle: View.propTypes.style,
    imageStyle: Image.propTypes.style,
};
