import React, { Component } from 'react'
import { Icon, View } from 'native-base'
import { Style } from './assets/style'

export default class Rating extends Component {

    constructor(props) {
        super(props)
        this.state = {
            score: this.props.score
        }
    }

    buildRating() {
        let rows = []

        for(i=1; i< 6; i++) {
            let score = this.state.score
            let icon = 'ios-star-outline'

            if(score >= i)
                icon = 'ios-star'
            else if(score > (i- 1))
                icon = 'ios-star-half'

            rows.push(
                <Icon name={ icon } style={ (this.props.editable? Style.iconRatingEdit :Style.iconRating) }
                    key={ i } onPress={ this.changeRating.bind(this, i) }/>
            )
        }

        return rows
    }

    changeRating(value) {
        if(!this.props.editable)
            return

        let score = this.state.score == value? this.state.score - 1: value
        this.setState({ score: score })
    }

    render() {
        return (
            <View style={ [Style.containerRow, this.props.style] }>
                { this.buildRating() }
            </View>
        )
    }
}
