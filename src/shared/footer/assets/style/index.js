import { StyleSheet } from 'react-native'
import { Colors, Commons, MergeStyle } from '../../../../shared/assets/style'

const StyleCustom = {
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: Colors.WHITE,
        borderTopColor: Colors.GAINSBORO,
        borderTopWidth: 1
    },
    containerButton: {
        alignItems: 'center',
        flexDirection: 'column',
        height: 55,
        flex: 1
    },
    buttonFooter: {
        height: 50,
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1
    },
    iconFooter: {
        ...Commons.iconNormal,
        marginBottom: 15
    },
    titleFooter: {
        ...Commons.textSmall,
        marginBottom: 5,
        paddingTop: 10
    },
    selected: {
        color: Colors.BLUE
    }
}
const Style = StyleSheet.create(MergeStyle(StyleCustom, Commons))
export { Style }
