import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Commons, MergeStyle } from '../../../../shared/assets/style'

const StyleCustom = {
    subTitle: {
        ...Commons.textNormal
    },
    filterContainer: {
        height: 50
    }
}

const Style = StyleSheet.create(MergeStyle(StyleCustom, Commons))
export { Style }
