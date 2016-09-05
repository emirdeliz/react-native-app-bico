import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Commons, MergeStyle } from '../../../../shared/assets/style'

const StyleCustom = {
    descriptionJob: {
        ...Commons.textNormal,
        padding: 5
    },
    descriptionItem: {
        ...Commons.textSmall,
        lineHeight: 15
    },
    iconRating: {
        ...Commons.iconSmall,
        lineHeight: 15,
        width: 12
    },
    containerSend: {
        padding: 15
    }
}

const Style = StyleSheet.create(MergeStyle(StyleCustom, Commons))
export { Style }
