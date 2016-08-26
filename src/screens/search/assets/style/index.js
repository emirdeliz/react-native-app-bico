import { StyleSheet } from 'react-native'
import { Colors, Commons, MergeStyle } from '../../../../shared/assets/style'

const StyleCustom = {
    iconFilter: {
        color: Colors.WHITE
    },
    iconRating: {
        ...Commons.iconNormal,
        marginRight: 5,
        color: Colors.POSITIVE
    },
    textRating: {
        ...Commons.textNormal,
        fontWeight: 'bold',
        marginBottom: 5,
        marginRight: 10
    },
    containerRating: {
        ...Commons.containerRow,
        marginLeft: 15
    },
    containerDistance: {
        marginLeft: 15
    },
    textDistance: {
        ...Commons.textNormal,
        color: Colors.POSITIVE,
        fontWeight: 'bold'
    },
    inputSearch: {
        paddingBottom: 10
    }
}

const Style = StyleSheet.create(MergeStyle(StyleCustom, Commons))
export { Style }
