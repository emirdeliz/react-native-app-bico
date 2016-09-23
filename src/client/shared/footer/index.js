import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'native-base';

import Style from './assets/style';

export default class Footer extends Component {
    static propTypes = {
        items: PropTypes.array,
        onChangeTab: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0,
        };
    }

    changeTab(item, index) {
        this.setState({ currentTab: index });
        this.props.onChangeTab(item, index);
    }

    buildItem() {
        const rows = [];

        this.props.items.forEach((item, index) => {
            rows.push(
                <View key={index} style={(index === this.state.currentTab ? Style.tabSelected : Style.containerRow)}>
                    <Button transparent style={Style.buttonFooter} onPress={this.changeTab.bind(this, item, index)}>
                        <Icon name={item.icon} style={
                            [Style.iconFooter, (index === this.state.currentTab ? Style.selected : {})]
                        } />
                    </Button>
                </View>
            );
        });

        return rows;
    }

    render() {
        return (
            <View style={Style.footer}>
                { this.buildItem() }
            </View>
        );
    }
}
