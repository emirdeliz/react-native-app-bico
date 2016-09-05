import { StyleSheet } from 'react-native'
import { Colors, Commons, MergeStyle } from '../../../../shared/assets/style'

const StyleCustom = {
    toolbar: {
        backgroundColor: Colors.ROYAL
    },
    textToolbar: {
        color: Colors.WHITE,
        textAlign: 'center'
    },
    iconRating: {
        ...Commons.iconNormal,
        lineHeight: 20,
        width: 15
    },
    descriptionRating: {
        ...Commons.textSmall,
         lineHeight: 15,
         marginRight: 15
    },
    containerPhoto: {
        height: 165,
        backgroundColor: Colors.ROYAL,
        alignItems: 'center',
        justifyContent: 'center'
    }
}

const Style = StyleSheet.create(MergeStyle(StyleCustom, Commons))
export { Style }
