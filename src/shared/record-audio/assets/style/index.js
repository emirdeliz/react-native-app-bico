import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Commons, MergeStyle } from '../../../../shared/assets/style'

const StyleCustom = {
    containerButtons: {
        ...Commons.containerRow,
        justifyContent:'center'
    },
    buttonRecord: {
        ...Commons.buttonRoundedNormal,
        marginLeft: 10
    },
    buttonPlay: {
        ...Commons.buttonRoundedNormal,
        marginLeft: 10
    },
    currentTime: {
        marginLeft: 10
    }
}

const Style = StyleSheet.create(MergeStyle(StyleCustom, Commons))
export { Style }
