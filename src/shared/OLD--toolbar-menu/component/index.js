import React, { Component, PropTypes } from 'react'
import { Image, TouchableHighlight, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors, Icons } from '../../assets/style'
import { Style } from '../assets/style'

export default class ToolbarMenuComponent extends Component {
    static propTypes = {
        openMenu: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
    }

    render() {
        const { openMenu } = this.props

        return (
            <View style={ this.props.style }>
                <TouchableHighlight onPress={ openMenu.bind(this) }>
                    <View>
                        <Icon name="bars" size={ Icons.size.SMALL } color={ Colors.WHITE } />
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
