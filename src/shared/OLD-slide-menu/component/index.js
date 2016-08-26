import React, { Component, PropTypes } from 'react'
import { Animation, PanResponder, View, Dimensions } from 'react-native'
import Immutable from 'immutable'
import { Style } from '../assets/style'

const screenWidth = Dimensions.get('window').width

export default class SlideMenuComponent extends Component {

    static propTypes = {
        slideMenu: PropTypes.instanceOf(Immutable.Map).isRequired,
        moveSlide: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.offset = 0 // Contains the center view offset from the left edge
        this._panGesture = PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return Math.abs(gestureState.dx) > Math.abs(gestureState.dy)
                && Math.abs(gestureState.dx) > 10
            },
            onPanResponderGrant: (evt, gestureState) => this.left = 0,
            onPanResponderMove: (evt, gestureState) => this.moveCenterView(gestureState.dx),
            onPanResponderRelease: this.moveFinished,
            onPanResponderTerminate: this.moveFinished,
        })
    }

    componentWillReceiveProps(props) {
        const { slideMenu } = props;
        this.moveCenterView(slideMenu.get('left'))
    }

    moveCenterView (left) {
        if (!this.center) return

        if ((this.offset + left) < 0) {
            this.left = -this.offset
        } else {
            this.left = left
        }

        this.center.setNativeProps({ style: { left: this.offset + this.left }})

        const { moveSlide } = this.props;
        moveSlide(left)
    }

    moveFinished() {
        if (!this.center) return

        var offset = this.offset + this.left

        if (this.offset === 0) {
            if (offset > screenWidth * 0.25) {
                this.offset = screenWidth * 0.75
            }
        } else {
            if (offset < screenWidth * 0.5) {
                this.offset = 0
            }
        }

        Animation.startAnimation(this.center, 400, 0, 'easeInOut', {'anchorPoint.x': 0, 'position.x': this.offset})
        this.center.setNativeProps({left: this.offset})
    }

    render() {
        const { slideMenu, renderCenterView,  renderLeftView } = this.props;
        let centerView = renderCenterView ? renderCenterView : null
        let leftView = renderLeftView ? renderLeftView : null

        return (
            <View style={ [Style.slideMenu, this.props.style] }>
                <View style={ Style.left }>
                    <View>{ leftView }</View>
                </View>
                <View style={ [Style.center, { left: this.offset }] } ref={ (center) => this.center = center }
                    { ...this._panGesture.panHandlers }>
                    { centerView }
                </View>
            </View>
        )
    }
}
