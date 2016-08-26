import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { Text, Button, Icon} from 'native-base'
import { Style } from './assets/style'

export default class Footer extends Component {

    constructor(props){
        super(props)
        this.state = {
            currentTab: 0
        }
    }

    onPress(item, index) {
        this.setState({ currentTab: index })
        this.props.onChangeTab(item, index)
    }

    buildItem() {
        let rows = []
        this.props.items.forEach((item, index) => {
            rows.push(
                <Button transparent style={ Style.button } key={ index } onPress={ this.onPress.bind(this, item, index) }>
                    <Icon name={ item.icon } style={ [Style.iconSmall, (index == this.state.currentTab? Style.selected: {})] }/>
                    <Text style={ [Style.textSmall, (index == this.state.currentTab? Style.selected: {})] }>{ item.desc }</Text>
                </Button>
            )
        })

        return rows
    }

    render() {
        return (
            <View style={ Style.footer }>
                { this.buildItem() }
            </View>
        )
    }
}
