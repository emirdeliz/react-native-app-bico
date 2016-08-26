import React, { Component } from 'react'
import ToolbarMenuComponent from './component'

export default class ToolbarMenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ToolbarMenuComponent {...this.props}/>
        );
    }
}
