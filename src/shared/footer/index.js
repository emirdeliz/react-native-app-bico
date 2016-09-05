import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import { Button, Text, Icon} from 'native-base'

import { Style } from './assets/style'

export default class Footer extends Component {

    constructor(props){
        super(props)
        this.state = {
            currentTab: 0
        }
    }

    changeTab(item, index) {
        this.setState({ currentTab: index })
        this.props.onChangeTab(item, index)
    }

    buildItem() {
        let rows = []
        this.props.items.forEach((item, index) => {
            rows.push(
                <View key={ index } style={ [Style.containerRow, (index == this.state.currentTab? { opacity: 1 }: { opacity: 0.7 })] }>
                    <Button transparent style={ Style.buttonFooter } onPress={ this.changeTab.bind(this, item, index) }>
                        <Icon name={ item.icon } style={ [Style.iconFooter, (index == this.state.currentTab? Style.selected: {})] }/>
                        <Text style={ Style.titleFooter}>{ item.desc }</Text>
                    </Button>
                </View>
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
