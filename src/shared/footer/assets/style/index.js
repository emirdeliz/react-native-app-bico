import { StyleSheet } from 'react-native'
import { Colors, Commons, MergeStyle } from '../../../../shared/assets/style'

const StyleCustom = {
    footer: {
        shadowColor: Colors.WHITE,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        backgroundColor: Colors.WHITE,
        borderTopColor: Colors.GRAY,
        borderTopWidth: 1
    },
    button: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        height: 50
    },
    selected: {
        color: Colors.BLUE,
        fontWeight: '600'
    }
}
const Style = StyleSheet.create(MergeStyle(StyleCustom, Commons))
export { Style }
