import React, { Component } from 'react'
import { Icon, View } from 'native-base'
import { Style } from './assets/style'

export default class Rating extends Component {

    constructor(props) {
        super(props)
    }

    buildStart() {
        let rows = []

        for(i=1; i< 6; i++) {
            let score = this.props.score
            let icon = 'ios-star-outline'

            if(score >= i)
                icon = 'ios-star'
            else if(score > (i- 1))
                icon = 'ios-star-half'

            rows.push(<Icon name={ icon } style={ Style.iconRating } key={ i }/>)
        }

        return rows
    }

    render() {
        return (
            <View style={ [Style.containerRow, this.props.style] }>
                { this.buildStart() }
            </View>
        )
    }
}
