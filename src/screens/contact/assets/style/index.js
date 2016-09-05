import { StyleSheet } from 'react-native'
import { Colors, Commons, MergeStyle } from '../../../../shared/assets/style'

const StyleCustom = {
    containerDescription: {
        ...Commons.containerColumn,
        paddingLeft: 10
    },
    professionalName: {
        ...Commons.textSmall,
        fontWeight: 'bold'
    },
    lastMessage: {
        ...Commons.textSmall,
        color: Colors.GRAY
    }
}

const Style = StyleSheet.create(MergeStyle(StyleCustom, Commons))
export { Style }
